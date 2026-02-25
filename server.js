import express from 'express';
import { Liquid } from 'liquidjs';
import pkg from 'pg';
const { Pool } = pkg;
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const engine = new Liquid();
const PORT = process.env.PORT || 8000;

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

//  Liquid Setup
app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'liquid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route
app.post('/api/notes', async (req, res) => {
    const { title, content, category } = req.body;
    try {
        const query = 'INSERT INTO notes (title, content, category) VALUES ($1, $2, $3) RETURNING *';
        const result = await pool.query(query, [title, content, category || 'general']);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "DB Error", details: err.message });
    }
});

// Frontend Route
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM notes ORDER BY id DESC');
        res.render('index', { notes: result.rows });
    } catch (err) {
        res.status(500).send("Database not connected. Check your DATABASE_URL.");
    }
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));