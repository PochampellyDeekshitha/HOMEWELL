// /config/multerConfig.js
const multer = require("multer");

// Define file storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");  // Directory where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);  // Unique filename
  },
});

// Create an upload instance with file filtering
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.fieldname === "profilePicture" ||
      file.fieldname === "aadhaarPhoto" ||
      file.fieldname === "certificationPicture"
    ) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error("Unexpected field")); // Reject the file
    }
  },
});

module.exports = upload;