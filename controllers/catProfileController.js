const CatProfile = require('../models/CatProfile');

const createCatProfile = async (req, res) => {
  try {
    const data = req.body;
    const newProfile = new CatProfile({
      ...data,
      vaccinations: {
        rabies: data.rabies === 'true',
        fvrcp: data.fvrcp === 'true',
        felv: data.felv === 'true'
      },
      getsAlongWith: JSON.parse(data.getsAlongWith || '[]'),
      photo: req.file ? req.file.filename : ''
    });

    await newProfile.save();
    res.status(201).json({ message: 'Cat profile created', profile: newProfile });
  } catch (err) {
    console.error('Error creating cat profile:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { createCatProfile };