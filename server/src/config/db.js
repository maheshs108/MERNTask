const mongoose = require('mongoose');

async function connectDB(mongoUri) {
  try {
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('⚠️  Server will continue running without database connection');
    // Don't exit the process, just log the error
  }
}

module.exports = connectDB;

