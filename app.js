let modeh4 = document.querySelector('#mode-h4');
let mode_main = document.querySelector('#mode');
let arrow = document.querySelector('#down');
let dark = document.querySelector('#dark');
let light = document.querySelector('#light');
let iphone = document.querySelector('#iphone');
let text = document.querySelector('#text');
let top1 = document.querySelector('#top1');
let bottom1 = document.querySelector('#bottom1');
let body = document.querySelector('#body');
let button1 = document.getElementsByTagName('button');
let bor_r = document.querySelector('#bor-r');
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');
let b7 = document.querySelector('#b7');
let b8 = document.querySelector('#b8');
let b9 = document.querySelector('#b9');
let b0 = document.querySelector('#b0');
let bt = document.querySelector('#bt');
let bp = document.querySelector('#bp');
let bm = document.querySelector('#bm');
let bx = document.querySelector('#bx');
let bd = document.querySelector('#bd');
let bpi = document.querySelector('#bpi');
let bb = document.querySelector('#bb');
let bc = document.querySelector('#bc');

modeh4.addEventListener('click', () => {
  if(mode_main.style.transform == 'translateY(-80%)'){
    mode_main.style.transform = 'translateY(0)';
    arrow.style.transform = 'rotate(180deg)';
  }else{
    mode_main.style.transform = 'translateY(-80%)';
    arrow.style.transform = 'rotate(0deg)';
  }
});

light.addEventListener('click', () => {
  top1.style.background = '#fff';
  body.style.color = '#000';
  bottom1.style.background = '#fdfdfd';
  bor_r.style.background = '#919191';
  modeh4.style.background = '#ddd';
  for(let i = 0; i<button1.length; i++){
    button1[i].style.color = '#000';
    button1[i].style.background = '#fff';
  }
  bt.style.background = '#7cb0ff';
  bp.style.background = '#7cb0ff';
  bm.style.background = '#7cb0ff';
  bx.style.background = '#7cb0ff';
  bd.style.background = '#7cb0ff';
  bpi.style.background = '#7cb0ff';
  bb.style.background = '#7cb0ff';
  bc.style.background = '#7cb0ff';
  dark.classList.remove('active-dark');
  iphone.classList.remove('active-dark');
  light.classList.add('active-light');
  body.style.backgroundImage = 'url(../bg-light.jpg)'
});

dark.addEventListener('click', () => {
  top1.style.background = '#2b292a';
  body.style.color = '#fff';
  bottom1.style.background = '#212121';
  bor_r.style.background = '#00527e';
  modeh4.style.background = '#013450';
  dark.classList.add('active-dark');
  iphone.classList.remove('active-dark');
  light.classList.remove('active-light');
  for(let i = 0; i<button1.length; i++){
    button1[i].style.color = '#fff';
    button1[i].style.background = '#343434';
  }
  bt.style.background = '#00527e';
  bp.style.background = '#00527e';
  bm.style.background = '#00527e';
  bx.style.background = '#00527e';
  bd.style.background = '#00527e';
  bpi.style.background = '#00527e';
  bb.style.background = '#00527e';
  bc.style.background = '#00527e';
  body.style.backgroundImage = 'url(../bg-blue.jpg)'
});

iphone.addEventListener('click', () => {
  top1.style.background = '#010101';
  body.style.color = '#fff';
  bottom1.style.background = '#010101';
  bor_r.style.background = '#fd9526';
  modeh4.style.background = '#b75e00';
  dark.classList.remove('active-dark');
  light.classList.remove('active-light');
  iphone.classList.add('active-dark');
  for(let i = 0; i<button1.length; i++){
    button1[i].style.color = '#fff';
    button1[i].style.background = '#333';
  }
  bt.style.background = '#fd9427';
  bp.style.background = '#a6a6a6';
  bm.style.background = '#fd9427';
  bx.style.background = '#fd9427';
  bd.style.background = '#fd9427';
  bpi.style.background = '#fd9427';
  bb.style.background = '#a6a6a6';
  bc.style.background = '#a6a6a6';
  body.style.backgroundImage = 'url(../bg-orange.jpg)'
});

if(true){
  text += b1.value;
  console.log(b1.value);
  text.innerHTML = `salom`;
}