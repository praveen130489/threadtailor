export async function openTryOn(modalEl){
  const video = modalEl.querySelector('#tryon-video');
  const canvas = modalEl.querySelector('#tryon-canvas');
  const ctx = canvas.getContext('2d');
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode:'user' }, audio:false });
  video.srcObject = stream;
  await video.play();
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  let raf;
  function draw(){
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // Simple overlay placeholder
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = '#00b37e';
    ctx.fillRect(canvas.width*0.35, canvas.height*0.2, canvas.width*0.3, canvas.height*0.5);
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }
  draw();
  modalEl.setAttribute('aria-hidden','false');
  return () => { cancelAnimationFrame(raf); stream.getTracks().forEach(t=>t.stop()); modalEl.setAttribute('aria-hidden','true'); };
}