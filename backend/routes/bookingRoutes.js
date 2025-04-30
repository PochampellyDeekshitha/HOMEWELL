const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const { sitterId, userId, serviceType, startDate, endDate, totalAmount } = req.body;
    const booking = new Booking({ sitterId, userId, serviceType, startDate, endDate, totalAmount });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

// ✅ Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('sitterId').populate('userId');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

module.exports = router;
