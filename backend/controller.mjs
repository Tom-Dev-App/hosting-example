import multer from "multer";
import path from "path";
import fs from "fs";
import db from "./database.mjs";
import crypto from "crypto";
import { BASE_PORT, BASE_URL, PROD_URL } from "./config.mjs";
// Function to generate a random string
const generateRandomString = (length) => {
  return crypto.randomBytes(length).toString("hex");
};

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "public/images/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const randomString = generateRandomString(16);
    const fileExt = path.extname(file.originalname);
    const randomFilename = `${randomString}${fileExt}`;
    cb(null, randomFilename);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimeType && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG or PNG and GIF are allowed."));
    }
  },
}).single("photo");

// Upload controller
export const uploadPhoto = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    const { filename } = req.file;
    const filedir = req.file.destination;
    // BELOW FOR DEVELOPMENT ENV
    // const fileurl = `${req.protocol}://${req.get(
    //   "host"
    // )}/${filedir}${filename}`;

    // FOR PRODUCTIONS
    const fileurl = `${
      PROD_URL ? PROD_URL : BASE_URL + ":" + BASE_PORT
    }/${filedir}${filename}`;

    const userFilename = req.body.filename || filename;

    try {
      const query =
        "INSERT INTO photos (filename, filedir, fileurl, userFilename) VALUES (?, ?, ?, ?)";
      const [results] = await db.execute(query, [
        filename,
        filedir,
        fileurl,
        userFilename,
      ]);
      res.status(201).json({
        message: "File uploaded successfully",
        file: { filename, filedir, fileurl, userFilename },
      });
    } catch (error) {
      res.status(500).json({ message: "Database error", error });
    }
  });
};

// Get all photos controller
export const getAllPhotos = async (req, res) => {
  try {
    const query = "SELECT * FROM photos";
    const [results] = await db.execute(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Database error", error });
  }
};
