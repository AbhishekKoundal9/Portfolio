const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav nav');menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const modal=document.querySelector('.modal'), modalImg=document.querySelector('.modal-image'), modalTitle=document.querySelector('.modal-title');
document.querySelectorAll('.cert-image-btn').forEach(btn=>btn.addEventListener('click',()=>{
  modalImg.src=btn.dataset.image; modalImg.alt=btn.dataset.title; modalTitle.textContent=btn.dataset.title;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src='';}
document.querySelector('.modal-close')?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
