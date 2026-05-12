import { Router } from 'express';
import { createItem } from '../lib/directus.js';

const router = Router();

router.get('/createnotes', (req, res) => {
  res.render('createnotes.liquid');
});

router.post('/api/notes', async (req, res) => {
  try {
    const { title, content, category, topic, external_url, links } = req.body;

    if (!title || !content) {
      return res.status(400).send('Title and Content are required.');
    }

    await createItem('notes', {
      title,
      content,
      category: category || 'general',
      topic: topic || 'Uncategorized',
      external_url: external_url || null,
      links: links || null,
    });

    res.redirect('/');
  } catch (err) {
    console.error('Create note error:', err);
    res.status(500).send('Failed to save note: ' + err.message);
  }
});

export default router;
