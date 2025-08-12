export function qs(sel, el=document){return el.querySelector(sel)}
export function qsa(sel, el=document){return Array.from(el.querySelectorAll(sel))}
export function html(strings, ...vals){
  const tpl = document.createElement('template');
  tpl.innerHTML = strings.map((s,i)=>s + (vals[i] ?? '')).join('');
  return tpl.content;
}
export function getQueryParam(key){
  const params = new URLSearchParams(location.search);
  return params.get(key);
}