import { apiGet } from '../lib/api.js';
import { qs, getQueryParam } from '../lib/utils.js';
import { renderProductCard } from '../components/productCard.js';

(async function mountCategory(){
  const slug = getQueryParam('slug') || 'products';
  const title = slug.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  qs('#category-title').textContent = title;
  const products = await apiGet('/products');
  const filtered = products.filter(p => (p.category||'products') === slug);
  qs('#category-grid').innerHTML = (filtered.length ? filtered : products).map(renderProductCard).join('');
})();