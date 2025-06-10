const MenuItem = require('../models/menu');

exports.editMenuItem = async (req, res, next) => {
    try {
        const {_id} = req.params;
        const {name, category, subCategory, description, imgPath, status, price} = req.body;

        if (!name || !category || !status || !price) {
            return res.status(400).json({error: true, message: "Bad request"});
        }

        const existingItem = await MenuItem.findOne({_id}); 
        if (!existingItem) {
            return res.status(400).json({
                error: true,
                message: 'Menu item not found'
            });
        }

        const updatedItem = await MenuItem.findOneAndUpdate({_id}, { 
            name, category, subCategory, description, imgPath, status, price
        }, 
        {
            new: true
        });

        return res.status(200).json({
            error: false,
            message: 'Menu Item updated successfully', 
            data: updatedItem
        });

    } catch (error) {
        return res.status(400).json({ 
            error: true,
            message: error.message
        });
    }
};

exports.getAllMenuItems = async (req,res,next) => {
    try {
        const menuItems = await MenuItem.find();
        if(menuItems.length === 0) return res.status(400).json({
            error:true,
            message:"Bad request"

        }
        )
        return res.status(200).json({
            error:false,
            message: "all menu items",
            data:menuItems
        })
    } catch (error) {
        return res.status(400).json({ 
            error: true,
            message: error.message
        });
    }
}

exports.addMenuItem = async (req, res, next) => {
    try {
        const { name, category, subCategory, description, imgPath, status, price } = req.body;

        if (!name || !category || !status || !price) {
            return res.status(400).json({ error: true, message: "Bad request" });
        }

        const newMenuItem = await MenuItem.insertMany([{
            name,
            category,
            subCategory,
            description,
            imgPath,
            status,
            price
        }]);

        return res.status(200).json({
            error: false,
            message: "Menu item added successfully",
            data: newMenuItem,
        });
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error.message,
        });
    }
};