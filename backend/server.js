const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // 📦 Import multer for file uploads
const bodyParser = require('body-parser');

// 2. Initialize express app
const app = express();

// 3. Passport configuration
require('./config/passport');

// 4. Middleware
app.use(cors({
  origin: 'http://localhost:3000', // 🔁 You can replace this with process.env.CLIENT_URL for flexibility
  methods:['GET','POST'],
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Optional: Handle URL-encoded payloads if needed in forms
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'your-session-secret',  // Replace process.env.SESSION_SECRET with a hardcoded secret
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,       // Should be true in production with HTTPS
    httpOnly: true,
    sameSite: 'lax'      // You can adjust this based on frontend/backend origin config
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// 5. Set Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers
app.use((req, res, next) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// 6. Import route handlers
const authRoutes = require('./routes/authRoutes');
const plantRoutes = require('./routes/plantRoutes');
const dogProfileRoutes = require('./routes/dogProfileRoutes');
const catProfileRoutes = require('./routes/catProfileRoutes');
const birdProfileRoutes = require('./routes/birdProfileRoutes');
const rabbitProfileRoutes = require('./routes/rabbitProfileRoutes');
const aquariumRoutes = require('./routes/aquariumRoutes');
const elderlyRoutes = require('./routes/elderlyRoutes');
const sitterRoutes = require('./routes/sitterRoutes'); // 📦 Import sitterRoutes
const otherAnimalRoutes = require('./routes/otherAnimalRoutes');
const chatbotRoutes = require('./routes/chatbot');

// 7. API Routes
app.use('/api/auth', authRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/dogs', dogProfileRoutes);
app.use('/api/cats', catProfileRoutes);
app.use('/api/rabbits', rabbitProfileRoutes);
app.use('/api/birds', birdProfileRoutes);
app.use('/api/aquariums', aquariumRoutes);
app.use('/api/elderly', elderlyRoutes);
app.use('/api/others', otherAnimalRoutes);
app.use('/api/chatbot', chatbotRoutes);

// 8. Add route for sitters
app.use('/api/sitters', sitterRoutes); // 📌 Add sitter route

// 9. Ensure the pets folder exists to store pet photos
const petFolderPath = path.join(__dirname, 'uploads', 'pets');

// Check if the folder exists, if not, create it
if (!fs.existsSync(petFolderPath)) {
  fs.mkdirSync(petFolderPath, { recursive: true });
}

// Create an uploads folder for sitters' profile pictures, Aadhaar, and certifications
const sitterFolderPath = path.join(__dirname, 'uploads', 'sitters');

// Check if the folder exists, if not, create it
if (!fs.existsSync(sitterFolderPath)) {
  fs.mkdirSync(sitterFolderPath, { recursive: true });
}

const aquariumFolderPath = path.join(__dirname, 'uploads', 'aquariums');

if (!fs.existsSync(aquariumFolderPath)) {
  fs.mkdirSync(aquariumFolderPath, { recursive: true });
}

// 10. Setup file upload handling using multer
const upload = multer({
  dest: path.join(__dirname, 'uploads', 'sitters'), // 🗂 Path for the files
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max file size
  fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('File must be an image')); // Reject non-image files
    }
  }
});

// 11. Connect to MongoDB (Directly using MongoDB URI without .env)
mongoose.connect('mongodb://127.0.0.1:27017/homewellDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// 12. Start the server (Directly using PORT)
const PORT = 5000; // Directly hardcoded PORT number
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));