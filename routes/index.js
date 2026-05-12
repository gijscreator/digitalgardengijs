import { Router } from 'express';
import { getItems } from '../lib/directus.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { category, sort } = req.query;

    const params = {};

    // Sorting
    params.sort = sort === 'oldest' ? 'id' : '-id';

    // Filtering — Directus filter syntax
    if (category && category !== 'all') {
      params['filter[category][_eq]'] = category;
    }

    const notes = await getItems('notes', params);

    res.render('index', {
      notes,
      selectedCategory: category || 'all',
      selectedSort: sort || 'newest',
    });
  } catch (err) {
    console.error('Home route error:', err);
    res.status(500).send('Could not load notes.');
  }
});

export default router;
