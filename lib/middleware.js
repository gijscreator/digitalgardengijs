import { getItems } from './directus.js';

/**
 * Attaches shared data to res.locals so every template can use it.
 * Add anything here that every page needs (nav, categories, user, etc.)
 */
export async function sharedData(req, res, next) {
  try {
    const notes = await getItems('notes', { 'fields': 'category' });

    // Build a unique sorted list of categories from the live data
    const categories = ['all', ...new Set(notes.map(n => n.category).filter(Boolean).sort())];

    res.locals.categories = categories;
    res.locals.currentPath = req.path;

    next();
  } catch (err) {
    console.error('sharedData middleware error:', err.message);
    // Don't block the page — just pass empty defaults
    res.locals.categories = ['all'];
    res.locals.currentPath = req.path;
    next();
  }
}
