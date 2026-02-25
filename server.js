import 'dotenv/config';
import express from 'express';
import { Liquid } from 'liquidjs';
import pkg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

// 1. Configure where and how files are saved
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/'); // Make sure this folder exists!
  },
  filename: (req, file, cb) => {
    // This gives the file a unique name using the current date
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// 2. Define the 'upload' variable that was causing the error
const upload = multer({ storage: storage });

const { Pool } = pkg;

// Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const engine = new Liquid();
const PORT = process.env.PORT || 8000;

// Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Engine
app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'liquid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home Page + Fetch and display notes
app.get('/', async (req, res) => {
    try {
        const { category, sort } = req.query;
        let query = 'SELECT * FROM notes';
        let params = [];

        // 1. Filtering Logic
        if (category && category !== 'all') {
            query += ' WHERE category = $1';
            params.push(category);
        }

        // 2. Sorting Logic
        const orderBy = sort === 'oldest' ? 'ASC' : 'DESC';
        query += ` ORDER BY id ${orderBy}`;

        const result = await pool.query(query, params);

        // 3. Render and pass the 'current' filter back to the page
        res.render("index", { 
            notes: result.rows,
            selectedCategory: category || 'all',
            selectedSort: sort || 'newest'
        });
    } catch (err) {
        console.error("Query Error:", err);
        res.status(500).send("Database error.");
    }
});

app.post('/api/notes', upload.single('attachment'), async (req, res) => {
    try {
        const { title, content, category, topic, external_url, additional_links } = req.body;
        
        // Validation: Ensure the core data exists
        if (!title || !content) {
            return res.status(400).send("Error: Title and Content are required.");
        }

        // File path logic
        const file_url = req.file ? `/uploads/${req.file.filename}` : null;

        const query = `
            INSERT INTO notes (title, content, category, topic, external_url, additional_links, file_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        
        const values = [
            title, 
            content, 
            category || 'general', 
            topic || 'Uncategorized', 
            external_url || null, 
            additional_links || null, 
            file_url
        ];

        await pool.query(query, values);
        res.redirect('/'); 
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).send("Failed to save note. Please check your connection.");
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Garden is growing at http://localhost:${PORT}`);
});