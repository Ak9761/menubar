const change=()=>{
  document.getElementById('menu').style.display='none'
  document.getElementById('closeicon').style.display='block'
  document.getElementById('closeicon').style.fontSize='35px'
  nav = document.querySelector('nav ul')
  nav.style.display='block'
  nav.style.marginLeft='40%'
  nav.style.height='100vh'
  nav.style.gap='0px'
  const elements = document.getElementsByClassName('lielement');
  for(let i = 0; i < elements.length; i++) {
  elements[i].style.paddingTop = '30%';
  }

}
const closeicon=()=>{
  document.getElementById('menu').style.display='block'
  document.getElementById('closeicon').style.display='none'
  document.querySelector('ul').style.display='none'
}