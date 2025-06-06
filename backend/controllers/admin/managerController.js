const managerModel = require('../../models/managerModel.js');


const getAllManagers = async (req, res) => {
    try {
        const managers = await managerModel.find({});
        res.status(200).json({
            message: 'manger fetched successfully',
            status: true,
            managers,
        });
    } catch (error) {
        console.error('Error fetching manger:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createManager = async (req, res) => {
    const { 
        name, email, age
    } = req.body;

    try {
        if (!name || !email ||!age) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        
        const managerData = {
            name,
            email,
            age,
        };
        
        const newmanager = await managerModel.create(managerData);

        res.status(201).json({
            message: 'manger created successfully',
            status: true,
            manger: newmanager,
        });
    } catch (error) {
        console.error('Error creating manger:', error);
        res.status(500).json({ message: error.message || 'Server error' });
    }
}

module.exports = {
    createManager,
    getAllManagers
};