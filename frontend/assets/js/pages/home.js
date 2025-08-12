import { apiGet } from '../lib/api.js';
import { qs } from '../lib/utils.js';
import { renderProductCard } from '../components/productCard.js';

(async function mountHome(){
  const grid = qs('#featured-grid'); if (!grid) return;
  const products = await apiGet('/products');
  const featured = products.slice(0, 8);
  grid.innerHTML = featured.map(renderProductCard).join('');

  const ugc = qs('#ugc-grid'); if (ugc) {
    ugc.innerHTML = Array.from({length:6}).map((_,i)=>`<img alt="UGC ${i+1}" src="/assets/images/ugc${(i%3)+1}.webp" loading="lazy" />`).join('');
  }
})();