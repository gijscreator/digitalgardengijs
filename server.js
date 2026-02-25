import express from 'express'
import { Liquid } from 'liquidjs'
const { Pool } = require('pg');
const path = require('path');

const app = express()
const engine = new Liquid()
const PORT = process.env.PORT || 8000

app.engine('liquid', engine.next());
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'liquid');

// 3. Middleware to read JSON from your REST API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. THE REST API: Add a new note
// Endpoint: POST /api/notes
app.post('/api/notes', async (req, res) => {
    const { title, content, category } = req.body;
    try {
        const query = 'INSERT INTO notes (title, content, category) VALUES ($1, $2, $3) RETURNING *';
        const values = [title, content, category || 'general'];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
});

// 5. THE VIEW: Render your learning page
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM notes ORDER BY created_at DESC');
        res.render('index', { notes: result.rows });
    } catch (err) {
        res.send("Error loading notes: " + err.message);
    }
});


app.listen(PORT, () => console.log(`Learning page live on port ${PORT}`));