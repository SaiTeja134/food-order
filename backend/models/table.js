const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNo: {
    type: Number,
    required: [true, 'Table number is required'],
    unique: true,  // Using field-level unique instead of schema.index()
    min: [1, 'Table number must be at least 1'],
    max: [150, 'Table number cannot exceed 150']
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    enum: {
      values: [2, 4, 6],
      message: 'Capacity must be either 2, 4, or 6'
    }
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  alloted: {
    type: Boolean,
    default: false
  },
  booked: {
    type: Boolean,
    default: false
  },
  served: {
    type: Boolean,
    default: false
  },
  bookingDate: {
    type: Date,
    default: null
  },
  bookingTime: {
    type: String,
    default: null
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, {
  timestamps: true, // Auto-manages createdAt and updatedAt
  toJSON: { 
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.__v; // Remove version key
      return ret;
    }
  },
  toObject: { 
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.__v; // Remove version key
      return ret;
    }
  }
});

// Indexes (excluding the duplicate tableNo index)
tableSchema.index({ capacity: 1 });
tableSchema.index({ isAvailable: 1 });
tableSchema.index({ booked: 1 });

// Pre-save hooks
tableSchema.pre('save', function(next) {
  if (this.booked && !this.bookingDate) {
    this.bookingDate = new Date();
  }
  this.updatedAt = new Date();
  next();
});

// Static methods
tableSchema.statics.isTableAvailable = async function(tableId) {
  try {
    const table = await this.findById(tableId);
    return !!(table && table.isAvailable && !table.booked);
  } catch (error) {
    console.error('Error checking table availability:', error);
    return false;
  }
};

// Virtuals (if you need any)
tableSchema.virtual('status').get(function() {
  if (this.booked) return 'booked';
  if (this.served) return 'served';
  if (this.alloted) return 'alloted';
  return 'available';
});

// Instance methods
tableSchema.methods.bookTable = function(userId, bookingTime) {
  this.booked = true;
  this.isAvailable = false;
  this.userId = userId;
  this.bookingTime = bookingTime;
  this.bookingDate = new Date();
  return this.save();
};

tableSchema.methods.releaseTable = function() {
  this.booked = false;
  this.isAvailable = true;
  this.userId = null;
  this.bookingTime = null;
  this.bookingDate = null;
  return this.save();
};

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;