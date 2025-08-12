export function renderFAQ(container, items){
  container.innerHTML = items.map(item => `<details>
    <summary>${item.q}</summary>
    <div>${item.a}</div>
  </details>`).join('');
}