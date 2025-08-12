import { qs, html } from '../lib/utils.js';

(function renderFooter(){
  const el = qs('#site-footer'); if (!el) return;
  const year = new Date().getFullYear();
  const tpl = html`
    <div class="cols container">
      <div>
        <strong>Thread & Tailor</strong>
        <p class="micro">Premium, breathable, tailored.</p>
      </div>
      <div>
        <strong>Explore</strong>
        <div><a href="/">Home</a></div>
        <div><a href="/category.html?slug=products">Products</a></div>
        <div><a href="/category.html?slug=featured">Featured</a></div>
      </div>
      <div>
        <strong>Help</strong>
        <div><a href="/help.html">FAQs</a></div>
        <div><a href="/contact.html">Contact Us</a></div>
      </div>
      <div>
        <strong>Legal</strong>
        <div><a href="#">Privacy</a></div>
        <div><a href="#">Terms</a></div>
      </div>
    </div>
    <div class="container micro" style="margin-top:16px;">© ${year} Thread & Tailor</div>`;
  el.appendChild(tpl);
})();