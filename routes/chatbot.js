const express = require('express');
const router = express.Router();

// POST /api/chatbot
router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Dummy bot logic - you can replace this later with real AI
  let botReply = "Thanks for your message. We'll get back to you soon!";

  // You can customize this with conditional logic:
  if (message.toLowerCase().includes('help')) {
    botReply = "Sure! I'm here to help. What do you need assistance with?";
  }

  return res.status(200).json({
    reply: botReply
  });
});

module.exports = router;
