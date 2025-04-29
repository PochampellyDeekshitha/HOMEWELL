const express = require("express");
const router = express.Router();
const getChatbotResponse = require('../utils/genai');
router.post("/", async (req, res) => {
  const { message } = req.body;

  let reply = "";

  const msg = message.toLowerCase();

  if (msg.includes("pet")) {
    reply = "Sure! For pet care, ensure timely feeding, clean water, and daily walks.";
  } else if (msg.includes("plant")) {
    reply = "Plants love consistency. Water them as per their type and keep them in sunlight.";
  } else if (msg.includes("elder")) {
    reply = "Elderly care includes medication reminders, emotional support, and regular check-ins.";
  } else if (msg.includes("aqua")) {
    reply = "Aquarium care involves clean water, right temperature, and feeding schedules.";
  } else {
    reply = "I'm here to help with pet, plant, elderly, and aquarium care. How can I assist you?";
  }

  res.json({ reply });
});

module.exports = router;