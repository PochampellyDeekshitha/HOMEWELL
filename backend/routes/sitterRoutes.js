const express = require('express');
const fs = require('fs');
const router = express.Router();
const Sitter = require('../models/Sitter');
const Booking = require('../models/Booking');
const upload = require('../middleware/upload');
const { getSittersByService } = require('../controllers/sitterController');
app.use('/api/sitters', sitterRoutes);

// ✅ Get all sitters or filter by service/category
router.get('/', async (req, res) => {
  try {
    const { service, category } = req.query;

    const categoryMap = {
      PetCare: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'],
      PlantCare: ['Plants'],
      AquaCare: ['Aquarium'],
      ElderlyCare: ['Elderly'],
    };

    let sitters;
    if (category && categoryMap[category]) {
      sitters = await Sitter.find({ services: { $in: categoryMap[category] } });
    } else if (service) {
      sitters = await Sitter.find({ services: service });
    } else {
      sitters = await Sitter.find();
    }

    res.status(200).json(sitters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sitters' });
  }
});

// ✅ Create new sitter profile
router.post(
  '/create',
  upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'aadhaarPhoto', maxCount: 1 },
    { name: 'certificationPicture', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        fullName, age, phone, email, bio, experience, availability, location,
        services, petTypes, otherPetType, workLocation, paymentMethods,
        profileVisibility, maxDistance, alternateContact, houseCheck
      } = req.body;

      const newSitter = new Sitter({
        fullName,
        age,
        phone,
        email,
        bio,
        experience,
        availability,
        location,
        services: Array.isArray(services) ? services : services ? [services] : [],
        petTypes: Array.isArray(petTypes) ? petTypes : petTypes ? [petTypes] : [],
        otherPetType,
        workLocation,
        paymentMethods: Array.isArray(paymentMethods) ? paymentMethods : paymentMethods ? [paymentMethods] : [],
        profileVisibility,
        maxDistance,
        alternateContact,
        houseCheck,
        profilePicture: req.files?.profilePicture?.[0]?.path || null,
        aadhaarPhoto: req.files?.aadhaarPhoto?.[0]?.path || null,
        certificationPicture: req.files?.certificationPicture?.[0]?.path || null,
      });

      await newSitter.save();
      res.status(201).json({ message: 'Sitter profile created successfully', sitter: newSitter });
    } catch (error) {
      console.error("Error creating sitter:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

// ✅ Get sitter by ID
router.get('/:id', async (req, res) => {
  try {
    const sitter = await Sitter.findById(req.params.id);
    if (!sitter) return res.status(404).json({ message: 'Sitter not found' });
    res.status(200).json(sitter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sitter profile' });
  }
});

// ✅ Update sitter
router.put(
  '/:id',
  upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'aadhaarPhoto', maxCount: 1 },
    { name: 'certificationPicture', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const sitter = await Sitter.findById(req.params.id);
      if (!sitter) return res.status(404).json({ message: 'Sitter not found' });

      const body = req.body;
      sitter.fullName = body.fullName || sitter.fullName;
      sitter.age = body.age || sitter.age;
      sitter.phone = body.phone || sitter.phone;
      sitter.email = body.email || sitter.email;
      sitter.bio = body.bio || sitter.bio;
      sitter.experience = body.experience || sitter.experience;
      sitter.availability = body.availability || sitter.availability;
      sitter.location = body.location || sitter.location;
      sitter.services = body.services ? body.services.split(',') : sitter.services;
      sitter.petTypes = body.petTypes ? body.petTypes.split(',') : sitter.petTypes;
      sitter.otherPetType = body.otherPetType || sitter.otherPetType;
      sitter.workLocation = body.workLocation || sitter.workLocation;
      sitter.paymentMethods = body.paymentMethods ? body.paymentMethods.split(',') : sitter.paymentMethods;
      sitter.profileVisibility = body.profileVisibility || sitter.profileVisibility;
      sitter.maxDistance = body.maxDistance || sitter.maxDistance;
      sitter.alternateContact = body.alternateContact || sitter.alternateContact;
      sitter.houseCheck = body.houseCheck || sitter.houseCheck;

      // Replace uploaded files
      if (req.files?.profilePicture) {
        if (sitter.profilePicture && fs.existsSync(sitter.profilePicture)) fs.unlinkSync(sitter.profilePicture);
        sitter.profilePicture = req.files.profilePicture[0].path;
      }
      if (req.files?.aadhaarPhoto) {
        if (sitter.aadhaarPhoto && fs.existsSync(sitter.aadhaarPhoto)) fs.unlinkSync(sitter.aadhaarPhoto);
        sitter.aadhaarPhoto = req.files.aadhaarPhoto[0].path;
      }
      if (req.files?.certificationPicture) {
        if (sitter.certificationPicture && fs.existsSync(sitter.certificationPicture)) fs.unlinkSync(sitter.certificationPicture);
        sitter.certificationPicture = req.files.certificationPicture[0].path;
      }

      await sitter.save();
      res.status(200).json({ message: 'Sitter profile updated successfully', sitter });
    } catch (err) {
      res.status(500).json({ message: 'Error updating sitter profile', error: err.message });
    }
  }
);

// ✅ Delete sitter
router.delete('/:id', async (req, res) => {
  try {
    const sitter = await Sitter.findByIdAndDelete(req.params.id);
    if (!sitter) return res.status(404).json({ message: 'Sitter not found' });

    if (sitter.profilePicture && fs.existsSync(sitter.profilePicture)) fs.unlinkSync(sitter.profilePicture);
    if (sitter.aadhaarPhoto && fs.existsSync(sitter.aadhaarPhoto)) fs.unlinkSync(sitter.aadhaarPhoto);
    if (sitter.certificationPicture && fs.existsSync(sitter.certificationPicture)) fs.unlinkSync(sitter.certificationPicture);

    res.status(200).json({ message: 'Sitter profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting sitter profile', error: err.message });
  }
});

// ✅ Book a sitter
router.post('/booking', async (req, res) => {
  try {
    const { sitterId, userId, serviceType, startDate, endDate, totalAmount } = req.body;

    if (!sitterId || !userId || !serviceType || !startDate || !endDate || !totalAmount) {
      return res.status(400).json({ message: 'All booking fields are required.' });
    }

    const booking = new Booking({ sitterId, userId, serviceType, startDate, endDate, totalAmount });
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

// ✅ Get sitters by individual service (filtered route)
router.get('/service/:serviceName', getSittersByService);

// Create a new booking
router.post('/api/bookings', async (req, res) => {
  const { sitterId, startDate, endDate, address, notes } = req.body;
  try {
    const booking = new BookingModel({
      sitterId,
      startDate,
      endDate,
      address,
      notes,
      status: 'pending', // or "confirmed" if you want
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Booking failed.' });
  }
});

module.exports = router;