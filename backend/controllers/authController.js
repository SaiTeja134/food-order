const {resetPassword,forgotPassword} = require('./users');

exports.forgotPassword = async (req, res, next) => {
    try {
        const {email} = req.body;
        const result = await forgotPassword(email);
        res.status(200).json(result);
        
    } catch (error) {
        next(error); 
    }
};

exports.resetPassword = async (req,res,next) => {
    try {
          const {newPassword,token} = req.body;
        const result = await resetPassword(token,newPassword);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}