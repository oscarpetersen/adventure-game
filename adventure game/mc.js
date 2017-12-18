var start = document.getElementById('start');
var start2 = document.getElementById('start2');
var start3 = document.getElementById('start3');
var body = document.getElementById('body');
var paper = document.getElementById('paper');
var paper1 = document.getElementById('paper1');
var book = document.getElementById('book');
var bookim = document.getElementById('bookim');
var sear = document.getElementById('sear');
var bookclosed = document.getElementById('bookclosed');
var key = document.getElementById('key');
var inventory = document.getElementById('inv');
var ivbutton = document.getElementById('in');
var keyin = document.getElementById('keyi');
var sword = document.getElementById('sword');
var swordi = document.getElementById('swordi');
var swordhol = document.getElementById('swordhol');
var slash = document.getElementById('slash');
var swordhol2 = document.getElementById('swordhol2');

//Enemy
var beast = document.getElementById('beast');
var beastdead = document.getElementById('beastd');
var e = false;

//inventory system\ doors system
var kk = false;
var s = false;
var k = false;
var doorKeepOpen = false;
var swor = false;

//inventory
function invent(){
  inv.style.display = 'inherit';
  ivbutton.onclick = normal;
  if (k==false)
  {
    keyin.style.display = 'none';
  }
  else if (k==true)
  {
    keyin.style.display = 'inline';
  }
  if (swor==false)
  {
    swordi.style.display = 'none';
  }
  else if (swor==true)
  {
    swordi.style.display = 'inline';
  }
  swordi.onclick = swordholdin;
}
function swordholdin() {
  swordhol.style.display = 'inline';
  swordi.onclick = normal2;
  swordhol.onclick = fadeIn;
}
//bug fix
function normal(){
  inv.style.display = 'none';
  ivbutton.onclick = invent;
  keyin.style.display = 'none';
  swordi.style.display = 'none';
  swordhol.style.display = 'none';
}
//bug fix 2
function normal2() {
  swordhol.style.display = 'none';

}
//first level
function level0(){
  start.innerHTML = 'go to the bedroom...';
  body.style.backgroundImage = 'url("css/ieks.jpg")';
  start2.innerHTML = 'go to the basement...';
  start2.style.display = 'inherit';
  start2.onclick = levelb;
  start.onclick = levelbe;
}
//basement
function levelb(){
  start.innerHTML = 'go back...';
  body.style.backgroundImage = 'url("css/f.jpg")';
  start2.innerHTML = 'go further into the basement...';
  start2.onclick = levelfb;
  start.onclick = level0;
  paper.style.display = 'none';
  paper1.style.display = 'none';
  start.style.display = 'inherit';
}
//further into basement
function levelfb(){
  start.innerHTML = 'go back...';
  body.style.backgroundImage = 'url("css/t.jpg")';
  start2.innerHTML = 'go back...';
  start2.onclick = levelb;
  start.style.display = 'none';
  paper1.style.display = 'inherit';
  paper1.onclick = goToPaper1;
}
//bedroom
function levelbe(){
  start.innerHTML = 'go to the library...';
  body.style.backgroundImage = 'url("css/b.jpg")';
  start2.innerHTML = 'go back...';
  start2.style.display = 'inherit';
  start2.onclick = level0;
  start.onclick = levellib;
  start.style.display = 'inline';
  start3.style.display = 'none';
}
//library
function levellib(){
  body.style.backgroundImage = 'url("css/lib.jpg")';
  start.innerHTML = 'search for the book which has the key...';
  start2.onclick = levelbe;
  start.onclick = levellib2;
  book.style.display = 'none';
  bookim.style.display = 'none';
  bookclosed.style.display = 'none';
  key.style.display = 'none';
  start3.style.display = 'inline';
  start3.innerHTML = 'go to the locked door...'
  start3.onclick = ldoor;
  start.style.display = 'inline';
  if (doorKeepOpen==false)
  {
    start3.onclick = ldoor;
  }
  else if (doorKeepOpen==true)
  {
    start3.onclick = odoor;
  }
  if (kk==true)
  {
    start.style.display = 'none';
  }
}
//locked door
function ldoor(){
  body.style.backgroundImage = 'url("css/cld.png")';
  start.style.display = 'none';
  start3.innerHTML = 'open the locked door...';
  start2.onclick = levellib;
  if (k==false)
  {
    start3.onclick = ldoor;
  }
  else if (k==true)
  {
    start3.onclick = odoor;
    doorKeepOpen = true;
  }

}
//open door
function odoor(){
  body.style.backgroundImage = 'url("css/old.png")';
  start3.innerHTML = 'go into the forest...';
  k = false;
  start.style.display = 'none';
  start2.onclick = levellib;
  start3.onclick = levelforest;
}
//forest
function levelforest(){
  body.style.backgroundImage = 'url("css/fo.jpg")';
  start3.innerHTML = 'go further into the forest...';
  start3.onclick = leveltemple;
  start2.onclick = odoor;
}
//outside temple
function leveltemple() {
  body.style.backgroundImage = 'url("css/ft.jpg")';
  start3.innerHTML = 'go to the temple...';
  start2.onclick = levelforest;
  start3.onclick = levelTempleDoor;
}
//templedoor
function levelTempleDoor(){
  body.style.backgroundImage = 'url("css/tdcl.jpg")';
  start3.onclick = levelTempleDoorOpen;
  start2.onclick = leveltemple;
  start3.innerHTML = 'open the temple doors...';
}
//templedooropen
function levelTempleDoorOpen(){
  body.style.backgroundImage = 'url("css/tdol.jpg")';
  start3.innerHTML = 'go into the temple...';
  start3.onclick = levelintemple;
  start2.onclick = leveltemple;

}
function levelintemple(){
  body.style.backgroundImage = 'url("css/temple.png")';
  start2.onclick = levelTempleDoorOpen;
  start3.innerHTML = 'go further into the temple...';
  start3.onclick = levelfintemple;
}
function levelfintemple() {
  body.style.backgroundImage = 'url("css/intemple.png")';
  start3.onclick = levelffintemple;
  start2.innerHTML = 'no going back';
  start2.onclick = 'levelfintemple';
  start.style.display = 'none';
  sword.style.display = 'inline';
  sword.onclick = soncli;
  beast.style.display = 'none';
  beastdead.style.display = 'none';
  start3.style.display = 'inline';
  if (swor==true)
  {
    sword.style.display = 'none';
  }
}
function levelffintemple(){
  body.style.backgroundImage = 'url("css/battle.png")';
  start.style.display = 'inline';
  start.innerHTML = '&#x1F6C8;Fight the beast with your sword!!'
  start.onclick = levelffintemple;
  start2.onclick = levelfintemple;
  start3.style.display = 'none';
  sword.style.display = 'none';


  if (e==false)
  {
    beast.style.display = 'inline';
    beastdead.style.display = 'none';
  }
  else if (e==true)
  {
    start.onclick = levelffend;
    start.innerHTML = 'good job! go to the end..'
    beast.style.display = 'none';
    beastdead.style.display = 'inline';
  }



}
function levelffend() {
  body.style.backgroundImage = 'url("css/end.png")';
  start2.style.display = 'none';
  beast.style.display = 'none';
  beastdead.style.display = 'none';
  start.style.display = 'none';
  ivbutton.style.display = 'none';
  inv.style.display = 'none';
  swordi.style.display = 'none';
}
function fadeIn() {
  slash.style.display = 'inline';
  setTimeout(fadeOut, 200);
  swordhol.style.display = 'none';
  swordhol2.style.display = 'inline'

}
function fadeOut() {
  slash.style.display = 'none';
  swordhol.style.display = 'inline';
  swordhol2.style.display = 'none';
  e = true;
  if (e==false)
  {
    beast.style.display = 'inline';
    beastdead.style.display = 'none';
  }
  else if (e==true)
  {
    beast.style.display = 'none';
    beastdead.style.display = 'inline';
  }
}
function soncli(){
  s = true;
  if (s==true)
  {
    sword.style.display = 'none';
    swor = true;
  }
  else if (s==false)
  {
    sword.style.display = 'inline';
  }
  swordhol.style
}


//library2
function levellib2(){
  body.style.backgroundImage = 'url("css/lib2.jpg")';
  book.style.display = 'block';
  book.onclick = booki;
  start.innerHTML = '&#x1F6C8;search for the book with the key...';
  start2.onclick = levellib;
  start3.style.display = 'none';

}
//closed book
function booki(){
  bookclosed.style.display = 'block';
  start.style.display = 'none';
  book.style.display = 'none';
  start2.onclick = levellib;
  bookclosed.onclick = booki2;
}
//open book
function booki2(){
  bookim.style.display = 'inline';
  start.style.display = 'none';
  bookclosed.style.display = 'none';
  key.style.display = 'inline';
  key.onclick = keyinven;

}
//book dismiss
function bookgone(){
  bookim.style.display = 'none';
}
//put key in inventory
function keyinven(){
  key.style.display = 'none';
  k = true;
  kk = true;
  if (k==true)
    {
      alert("You Have Picked Up A Key, Push the inventory button to view it!!");
    }
}
//show paper
function goToPaper1(){
  console.log('click');
  paper.style.display = 'block';
  paper1.onclick = goToPaper2;
  paper1.innerHTML = 'click to dismiss';

}
//dismiss
function goToPaper2(){
  paper.style.display = 'none';
  paper1.style.display = 'none';
}
//default functions
keyin.style.display = 'none';
sword.style.display = 'none';
swordi.style.display = 'none';
sear.style.display = 'none';
start.onclick = level0;
start2.style.display = 'none';
start3.style.display = 'none';
paper.style.display = 'none';
paper1.style.display = 'none';
book.style.display = 'none';
bookim.style.display = 'none';
bookclosed.style.display = 'none';
key.style.display = 'none';
inv.style.display = 'none';
ivbutton.onclick = invent;
swordhol.style.display = 'none';
slash.style.display = 'none';
swordhol2.style.display = 'none';
beast.style.display = 'none';
beastd.style.display = 'none';
