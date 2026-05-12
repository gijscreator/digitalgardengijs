import { Router } from 'express';
import { getItem, updateItem } from '../lib/directus.js';

const router = Router();

router.get('/edit/:id', async (req, res) => {
  try {
    const note = await getItem('notes', req.params.id);
    res.render('createnotes.liquid', { note, isEditing: true });
  } catch (err) {
    console.error('Edit form error:', err);
    res.status(404).send('Note not found.');
  }
});

router.post('/api/notes/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, topic, external_url, links } = req.body;

    await updateItem('notes', id, {
      title,
      content,
      category,
      topic,
      external_url: external_url || null,
      links: links || null,
    });

    res.redirect('/');
  } catch (err) {
    console.error('Update note error:', err);
    res.status(500).send('Update failed: ' + err.message);
  }
});

export default router;
