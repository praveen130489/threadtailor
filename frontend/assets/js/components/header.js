import { qs, html } from '../lib/utils.js';

(function renderHeader(){
  const el = qs('#site-header'); if (!el) return;
  const tpl = html`
    <div class="inner">
      <a href="/">Thread & Tailor</a>
      <nav aria-label="Primary">
        <a href="/">Home</a>
        <a href="/category.html?slug=products">Products</a>
        <a href="/category.html?slug=promotional-offers">Promotional Offers</a>
        <a href="/category.html?slug=featured">Featured</a>
        <a href="/category.html?slug=celebrity-collections">Celebrity Collections</a>
      </nav>
      <nav aria-label="User">
        <a href="/blog.html">Blog</a>
        <a href="/membership.html">Membership</a>
        <a href="/account.html">Account</a>
        <a href="/cart.html">Cart</a>
      </nav>
    </div>`;
  el.appendChild(tpl);
})();