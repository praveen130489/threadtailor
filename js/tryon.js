// Minimal AI Try-On (demo). Uses camera and overlays a product decal. Graceful fallback if blocked.
(async function(){
  const btn = document.getElementById('tryOnBtn');
  if(!btn) return;

  let modal, video, overlay;
  function close(){ modal?.remove(); modal = null; }

  function open(){
    modal = document.createElement('div');
    modal.style.position = 'fixed'; modal.style.inset = '0'; modal.style.background = 'rgba(0,0,0,0.8)'; modal.style.zIndex = '2000';
    const wrap = document.createElement('div');
    wrap.style.position = 'absolute'; wrap.style.top = '50%'; wrap.style.left = '50%'; wrap.style.transform = 'translate(-50%, -50%)'; wrap.style.width = 'min(92vw, 720px)'; wrap.style.aspectRatio = '3/4'; wrap.style.borderRadius = '14px'; wrap.style.overflow = 'hidden'; wrap.style.border = '1px solid rgba(255,255,255,0.12)';
    video = document.createElement('video'); video.autoplay = true; video.playsInline = true; video.muted = true; video.style.width = '100%'; video.style.height = '100%'; video.style.objectFit = 'cover';
    overlay = document.createElement('img'); overlay.src = '/images/decal.png'; overlay.alt = 'Try-on overlay'; overlay.style.position='absolute'; overlay.style.left='50%'; overlay.style.top='38%'; overlay.style.transform='translate(-50%,-50%)'; overlay.style.width='60%'; overlay.style.opacity='0.9'; overlay.style.pointerEvents='none';
    const closeBtn = document.createElement('button'); closeBtn.textContent='Close'; closeBtn.className='btn btn-ghost'; closeBtn.style.position='absolute'; closeBtn.style.right='12px'; closeBtn.style.top='12px'; closeBtn.onclick=close;
    wrap.appendChild(video); wrap.appendChild(overlay); wrap.appendChild(closeBtn); modal.appendChild(wrap); document.body.appendChild(modal);
  }

  async function startCamera(){
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
    video.srcObject = stream; await video.play();
  }

  btn.addEventListener('click', async ()=>{
    open();
    try { await startCamera(); } catch(e){ console.warn('Camera blocked', e); }
  });
})();