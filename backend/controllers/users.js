const User = require('../models/user');
const bcrypt = require('bcrypt');
const { generateToken, resetToken } = require('../middleware/auth');
const transport = require('../utils/mailTransport');
const createError = require('http-errors');

exports.register = async (req, res) => {
    try {
        const { name, email, phoneNo, password, role } = req.body;
        
        if (!name || !email || !phoneNo || !password || !role) {
            return res.status(400).json({ error: true, message: "Bad request" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: true, message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ 
            name, 
            email, 
            phoneNo, 
            password: hashedPassword, 
            role 
        });

        res.status(200).json({ 
            error: false, 
            message: "User Registration Successful", 
            data: newUser 
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: "Internal Server Error",
            details: error.message 
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users.length) {
            return res.status(404).json({ 
                error: true, 
                message: "No users found" 
            });
        }
        res.status(200).json({
            error: false,
            data: users
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: "Internal Server Error" 
        });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ 
                error: true, 
                message: `No user found with EMAIL ID: ${email}` 
            });
        }

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        const token = resetToken(payload);
        user.resetToken = token;
        user.resetTokenExpiry = Date.now() + 15 * 60 * 1000;
        await user.save();

        await transport.sendMail({
            from: `"Shopfiy" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Password Reset Request',
            html: `
            <p>Hello, ${user.name}</p>
            <h3>We received a request to reset your password. If you did not request a password reset</h3>
            <p><strong>Important:</strong> This link will expire in 15 minutes for your security.</p>
            <a href="${process.env.CLIENT_URL}/reset-password/${token}" style="
            background-color:blue;
            color:white;
            text-align:center;
            display:inline-block;
            font-size:16px;
            border-radius: 4px;        
            ">Reset Password</a>
            <p>If you have any questions or need assistance, feel free to contact our support team</p>
            <p>Thanks, <br> Shopify Team</p>
            `
        });

        res.status(200).json({ 
            error: false, 
            message: 'Password reset link sent to your email' 
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: 'Internal server error',
            details: error.message 
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        
        if (!token || !newPassword) {
            return res.status(400).json({ 
                error: true, 
                message: "Token and new password are required" 
            });
        }

        const user = await User.findOne({ resetToken: token });
        if (!user) {
            return res.status(400).json({ 
                error: true, 
                message: "Invalid token" 
            });
        }

        if (Date.now() > user.resetTokenExpiry) {
            return res.status(400).json({ 
                error: true, 
                message: "Token expired" 
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.status(200).json({ 
            error: false, 
            message: 'Password reset successful!' 
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: 'Internal server error',
            details: error.message 
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ 
                error: true, 
                message: "Email and password are required" 
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ 
                error: true, 
                message: "User not found" 
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                error: true, 
                message: "Invalid credentials" 
            });
        }

        const token = generateToken(user._id);
        const userData = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            phoneNo: user.phoneNo
        };

        res.status(200).json({
            error: false,
            token,
            user: userData,
            message: "Login successful"
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: 'Internal server error',
            details: error.message 
        });
    }
};