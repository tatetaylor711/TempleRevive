// Simple verse lookup wrapper
import axios from 'axios';

// For MVP you can replace this with a local JSON or a chosen Bible API.
// Example placeholder implementation returns the reference as "resolved" text.

export async function fetchVerse(reference) {
  if (!reference) return null;

  // Example: integrate a real Bible API here. For now return a placeholder.
  return Promise.resolve({ reference, text: `${reference} — [Verse text placeholder]` });
}
