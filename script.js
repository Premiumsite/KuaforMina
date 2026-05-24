const topbar=document.getElementById('topbar');
window.addEventListener('scroll',()=>topbar.classList.toggle('scrolled',window.scrollY>35));

document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});});});

const links=[...document.querySelectorAll('.navlinks a')];
const sections=links.map(l=>document.querySelector(l.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll',()=>{let current=sections[0];sections.forEach(s=>{if(window.scrollY>=s.offsetTop-160)current=s});links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+current.id));});


const petalLayer = document.querySelector('.petalLayer');
if (petalLayer) {
  const count = window.matchMedia('(max-width: 700px)').matches ? 18 : 42;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.setProperty('--drift', (Math.random() * 220 - 110).toFixed(0) + 'px');
    petal.style.animationDuration = (7 + Math.random() * 9).toFixed(2) + 's';
    petal.style.animationDelay = (-Math.random() * 12).toFixed(2) + 's';
    petal.style.transform = `rotate(${Math.random()*180}deg)`;
    petalLayer.appendChild(petal);
  }
}

// premium review carousel with left/right controls
const reviewCards=[...document.querySelectorAll('.reviewCard')];
const dotsWrap=document.querySelector('.reviewDots');
let reviewIndex=0;
if(reviewCards.length && dotsWrap){
  reviewCards.forEach((_,i)=>{const d=document.createElement('span'); if(i===0)d.classList.add('active'); dotsWrap.appendChild(d);});
  const dots=[...dotsWrap.children];
  const showReview=(i)=>{reviewIndex=(i+reviewCards.length)%reviewCards.length; reviewCards.forEach((c,n)=>c.classList.toggle('active',n===reviewIndex)); dots.forEach((d,n)=>d.classList.toggle('active',n===reviewIndex));};
  document.querySelector('.reviewBtn.prev')?.addEventListener('click',()=>showReview(reviewIndex-1));
  document.querySelector('.reviewBtn.next')?.addEventListener('click',()=>showReview(reviewIndex+1));
  dots.forEach((d,i)=>d.addEventListener('click',()=>showReview(i)));
  setInterval(()=>showReview(reviewIndex+1),5600);
}
