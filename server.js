import 'dotenv/config';
import express from 'express';
import { Liquid } from 'liquidjs';
import path from 'path';
import { fileURLToPath } from 'url';

import { sharedData } from './lib/middleware.js';

import indexRoute from './routes/index.js';
import noteRoute from './routes/note.js';
import createnotesRoute from './routes/createnotes.js';
import editRoute from './routes/edit.js';
import playgardenRoute from './routes/playgarden.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const engine = new Liquid();
const PORT = process.env.PORT || 8005;

app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'liquid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(sharedData);

// Routes
app.use(indexRoute);
app.use(noteRoute);
app.use(createnotesRoute);
app.use(editRoute);
app.use(playgardenRoute);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Garden is growing at http://localhost:${PORT}`);
});
