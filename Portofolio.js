// application d'intersection observer 
/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observe 
 */
 
const callback=function(entries,observe) {
entries.forEach((entry)=>{if(entry.intersectionRatio>0){
 active(entry.target);
}});

}
function active(elem) {
    const id = elem.getAttribute('id');
    const ancre=document.querySelector(`a[href='#${id}']`); 
    if (ancre===null) {
      return null
      
    }
    ancre.parentElement
    .querySelectorAll('.active')
    .forEach(element=>element.classList.remove('active'))
    ancre.classList.add('active')
    
  }
// rootMargin permet de définir la zone de d'observation 
const ratio =.6;
const y = Math.round(window.innerHeight*ratio);
let  observer = new IntersectionObserver(callback,{rootMargin:`-${window.innerHeight-y-1}px 0px -${y}px 0px `})
const sections = document.querySelectorAll('section')
if(sections.length>0){
    sections.forEach((section)=>{observer.observe(section)})
}
