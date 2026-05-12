const BASE_URL = process.env.DIRECTUS_URL || 'https://api.gijsnagtegaal.nl';

/**
 * Fetch items from a Directus collection.
 * @param {string} collection - e.g. 'notes'
 * @param {URLSearchParams|object} params - optional query params
 */
export async function getItems(collection, params = {}) {
  const url = new URL(`${BASE_URL}/items/${collection}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Directus error: ${res.status} on ${url}`);
  const json = await res.json();
  return json.data;
}

/**
 * Fetch a single item by ID.
 */
export async function getItem(collection, id) {
  const res = await fetch(`${BASE_URL}/items/${collection}/${id}`);
  if (!res.ok) throw new Error(`Directus error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

/**
 * Create a new item.
 */
export async function createItem(collection, body) {
  const res = await fetch(`${BASE_URL}/items/${collection}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Directus error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

/**
 * Update an item by ID.
 */
export async function updateItem(collection, id, body) {
  const res = await fetch(`${BASE_URL}/items/${collection}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Directus error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

/**
 * Delete an item by ID.
 */
export async function deleteItem(collection, id) {
  const res = await fetch(`${BASE_URL}/items/${collection}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Directus error: ${res.status}`);
}
