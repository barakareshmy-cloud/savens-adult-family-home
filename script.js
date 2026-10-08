
const menuBtn=document.getElementById('menuBtn');
const mainNav=document.getElementById('mainNav');
if(menuBtn&&mainNav){
  menuBtn.addEventListener('click',()=>mainNav.classList.toggle('open'));
  document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));
}

/* Clickable navigation cards */
document.querySelectorAll('[data-href].interactive-card').forEach(card=>{
  const go=()=>{ const href=card.dataset.href; if(href) window.location.href=href; };
  card.addEventListener('click',go);
  card.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); }
  });
});

/* Image lightbox */
const imageButtons=[...document.querySelectorAll('.image-open[data-lightbox-src]')];
if(imageButtons.length){
  const overlay=document.createElement('div');
  overlay.className='lightbox';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML=`
    <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="lightbox-close" type="button" aria-label="Close image">×</button>
      <button class="lightbox-prev" type="button" aria-label="Previous image">‹</button>
      <img alt="">
      <div class="lightbox-caption"></div>
      <button class="lightbox-next" type="button" aria-label="Next image">›</button>
    </div>`;
  document.body.appendChild(overlay);

  const img=overlay.querySelector('img');
  const caption=overlay.querySelector('.lightbox-caption');
  const closeBtn=overlay.querySelector('.lightbox-close');
  const prevBtn=overlay.querySelector('.lightbox-prev');
  const nextBtn=overlay.querySelector('.lightbox-next');
  let current=0;

  function show(i){
    current=(i+imageButtons.length)%imageButtons.length;
    const b=imageButtons[current];
    img.src=b.dataset.lightboxSrc;
    img.alt=b.dataset.lightboxAlt||'SAVENS photo';
    caption.textContent=b.dataset.lightboxAlt||'';
  }
  function open(i){
    show(i);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    closeBtn.focus();
  }
  function close(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    imageButtons[current]?.focus();
  }
  imageButtons.forEach((b,i)=>b.addEventListener('click',()=>open(i)));
  closeBtn.addEventListener('click',close);
  prevBtn.addEventListener('click',()=>show(current-1));
  nextBtn.addEventListener('click',()=>show(current+1));
  overlay.addEventListener('click',e=>{ if(e.target===overlay) close(); });
  document.addEventListener('keydown',e=>{
    if(!overlay.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') show(current-1);
    if(e.key==='ArrowRight') show(current+1);
  });
}


/* Final responsive navigation behavior */
(function(){
  const btn=document.getElementById('menuBtn');
  const nav=document.getElementById('mainNav');
  if(!btn || !nav) return;

  btn.setAttribute('aria-expanded','false');
  btn.setAttribute('aria-controls','mainNav');

  btn.addEventListener('click',()=>{
    const open=nav.classList.contains('open');
    btn.setAttribute('aria-expanded', String(!open));
  });

  document.addEventListener('click',(e)=>{
    if(window.innerWidth>980) return;
    if(!nav.classList.contains('open')) return;
    if(nav.contains(e.target) || btn.contains(e.target)) return;
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  });

  window.addEventListener('resize',()=>{
    if(window.innerWidth>980){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });
})();
