export function injectJsonLd(obj){
  const s = document.createElement('script');
  s.type='application/ld+json';
  s.textContent = JSON.stringify(obj);
  document.head.appendChild(s);
}

export function productSchema({name, description, images, sku, brand='Thread & Tailor', offers}){
  return {
    '@context':'https://schema.org', '@type':'Product', name, description, image: images, sku, brand: { '@type':'Brand', name: brand }, offers
  };
}

export function faqSchema(faqs){
  return {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity: faqs.map(f=>({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a }}))
  };
}