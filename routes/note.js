import { Router } from 'express';
import { getItem } from '../lib/directus.js';

const router = Router();

router.get('/note/:id', async (req, res) => {
  try {
    const note = await getItem('notes', req.params.id);
    res.render('detailnote.liquid', { note });
  } catch (err) {
    console.error('Note detail error:', err);
    res.status(404).send('Note not found.');
  }
});

export default router;
