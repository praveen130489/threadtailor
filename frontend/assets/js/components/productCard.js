export function renderProductCard(p){
  return `<article class="product-card">
    <a href="/product.html?slug=${encodeURIComponent(p.slug)}">
      <img src="${p.images?.[0] || '/assets/images/placeholder.webp'}" alt="${p.title}" loading="lazy"/>
      <div class="body">
        <div class="title">${p.title}</div>
        <div class="price">₹${p.price?.value?.toLocaleString?.('en-IN') || p.price?.value}</div>
        <div class="micro">⭐ ${p.rating || '—'} • ${p.reviewCount || 0} reviews</div>
      </div>
    </a>
  </article>`;
}