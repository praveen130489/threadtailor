import { apiGet } from '../lib/api.js';

export async function mountReviewList(container, productSlug){
  const reviews = await apiGet(`/reviews/${encodeURIComponent(productSlug)}`);
  container.innerHTML = reviews.map(r => `<div class="review">
    <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
    <div><strong>${r.userName}</strong> — ${r.title}</div>
    <p>${r.body}</p>
  </div>`).join('');
}