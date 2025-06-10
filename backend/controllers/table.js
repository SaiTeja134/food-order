const Table = require('../models/table');
const addTable = async (req, res) => {
  try {
    console.log(req.body);
    const { tableNo, capacity, isAvailable } = req.body;

    if (!tableNo || !capacity || ![2, 4, 6].includes(capacity)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Table number and capacity (2,4,6) are required' 
      });
    }

    const existingTable = await Table.findOne({ tableNo });
    if (existingTable) {
      return res.status(409).json({ 
        success: false, 
        message: 'Table number already exists' 
      });
    }

    const newTable = await Table.create({ 
      tableNo, 
      capacity,
      isAvailable: isAvailable !== false,
      alloted: false,
      served: false,
      booked: false
    });

    res.status(201).json({ 
      success: true, 
      data: newTable 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};
const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find().sort({ tableNo: 1 });
    const groupedTables = {
      capacity2: tables.filter(t => t.capacity === 2),
      capacity4: tables.filter(t => t.capacity === 4),
      capacity6: tables.filter(t => t.capacity === 6)
    };

    res.status(200).json({ 
      success: true, 
      data: groupedTables 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch tables',
      error: error.message 
    });
  }
};
const updateTableStatus = async (req, res) => {
  try {
    const { _id } = req.body;
    const updateData = req.body;

    if (!_id || !updateData) {
      return res.status(400).json({ 
        success: false, 
        message: 'Table ID and update data are required' 
      });
    }

    const updatedTable = await Table.findByIdAndUpdate(
      _id, 
      updateData, 
      { new: true, runValidators: true }
    );

    if (!updatedTable) {
      return res.status(404).json({ 
        success: false, 
        message: 'Table not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      data: updatedTable,
      message:'Table status update successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update table',
      error: error.message 
    });
  }
};

const bookTable = async (req, res) => {
  try {
    const { _id, isAvailable, bookingDate, bookingTime, booked } = req.body;

    if (!_id) {
      return res.status(400).json({ error: true, message: 'Bad request' });
    }

    await Table.findByIdAndUpdate(_id, { $set: { bookingDate, bookingTime, isAvailable, booked } });

    const updatedTable = await Table.findOne({ _id });

    res.status(200).json({ success: true, table: updatedTable });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};


const getTableById = async (req,res) => {
  try {
    const {id} = req.params;
    const table = await Table.findById(id);
    return res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
}

module.exports = { 
  addTable, 
  getAllTables, 
  updateTableStatus,
  bookTable,
  getTableById
};
