const header=document.querySelector('.site-header');
const toggle=document.getElementById('menu-toggle');
const nav=document.getElementById('main-nav');
const year=document.getElementById('year');
const chips=[...document.querySelectorAll('#category-filters button')];
const search=document.getElementById('menu-search');
const cards=[...document.querySelectorAll('#menu-items .card')];
const form=document.getElementById('contact-form');
const status=document.getElementById('form-status');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
year.textContent=String(new Date().getFullYear());

let activeCategory='all';
function applyMenuFilter(){
  const q=(search.value||'').toLowerCase();
  cards.forEach(card=>{
    const okCategory=activeCategory==='all'||card.dataset.category===activeCategory;
    const okText=(card.dataset.search||'').toLowerCase().includes(q);
    card.style.display=okCategory&&okText?'block':'none';
  });
}
chips.forEach(btn=>btn.addEventListener('click',()=>{chips.forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeCategory=btn.dataset.category;applyMenuFilter();}));
search?.addEventListener('input',applyMenuFilter);

const lightbox=document.createElement('dialog');
lightbox.className='lightbox';
document.body.append(lightbox);
document.querySelectorAll('#gallery-grid img').forEach(img=>img.addEventListener('click',()=>{lightbox.innerHTML=`<img src="${img.src}" alt="${img.alt}"><form method="dialog"><button>Κλείσιμο</button></form>`;lightbox.showModal();}));

form?.addEventListener('submit',(e)=>{e.preventDefault();status.textContent='Το μήνυμα εστάλη! Θα επικοινωνήσουμε σύντομα.';form.reset();});
