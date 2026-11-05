// Carrosséis dimensionados ao espaço disponível, sem PHP.
document.addEventListener('DOMContentLoaded',()=>{
  for(const [container,back,next] of [['.imagens-header','.prev-header','.next-header'],['.imagens','.prev','.next']]){
    const track=document.querySelector(container);if(!track)return;
    const images=[...track.querySelectorAll('img')];if(!images.length)return;
    let current=0;
    const show=(delta)=>{current=(current+delta+images.length)%images.length;track.style.transform='translateX(-'+(current*100)+'%)'};
    document.querySelector(back)?.addEventListener('click',()=>show(-1));
    document.querySelector(next)?.addEventListener('click',()=>show(1));
    setInterval(()=>show(1),6500);
  }
  const search=document.querySelector('.search-input');
  const filter=()=>{const term=(search?.value||'').toLocaleLowerCase('pt-BR').trim();document.querySelectorAll('.card-wrapper > div').forEach(card=>{card.style.display=(card.querySelector('h3')?.textContent||'').toLocaleLowerCase('pt-BR').includes(term)?'':'none'})};
  search?.addEventListener('input',filter);
  document.querySelector('.search-button')?.addEventListener('click',filter);
});
