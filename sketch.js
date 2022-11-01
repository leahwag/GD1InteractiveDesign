let sel;
let a;
let b;
let c;
let d;

let mySiz;
let hSiz;
let vSiz;
let lSiz;

var meridiem = "am"

mySiz = 50;
// mySizAPP = 50;
// mySizDIS = 0.001;

hSiz = 0.001;
// hSizAPP = 50;
// hSizDIS = 0.001;

vSiz = 0.001;
// vSizAPP = 50;
// vSizDIS = 0.001;

lSiz = 0.001;
// lSizAPP = 50;
// lSizDIS = 0.001;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('My Location', a);
  sel.option('Honolulu, HI', b);
  sel.option('Las Vegas, NV', c);
  sel.option('London, ENG, UK', d);
  sel.selected(a);
  sel.changed(mySelectTime);
  
}


function mySelectTime(){
  
//   let place = sel.value();
  
//   if(place == 'My Location'){
//     mySiz = windowWidth*0.08;
//     hSiz = 0.001;
//     vSiz = 0.001;
//     lSiz = 0.001;
//   }
  
//   if(place == 'Honolulu, HI'){
//     mySiz = 0.001;
//     hSiz = windowWidth*0.08;
//     vSiz = 0.001;
//     lSiz = 0.001;
//   }
  
//   if(place == 'Las Vegas, NV'){
//     mySiz = 0.001;
//     hSiz = 0.001;
//     vSiz = windowWidth*0.08;
//     lSiz = 0.001;
//   }
  
//   if(place == 'London, ENG, UK'){
//     mySiz = 0.001;
//     hSiz = 0.001;
//     vSiz = 0.001;
//     lSiz = windowWidth*0.08;
//   }
  
}


function draw() {
  background('#E58177');
  fill('#4D1D18');
  
  let place = sel.value();
  
  if(place == 'My Location'){
    mySiz = windowWidth*0.07;
    hSiz = 0.001;
    vSiz = 0.001;
    lSiz = 0.001;
  }
  
  if(place == 'Honolulu, HI'){
    mySiz = 0.001;
    hSiz = windowWidth*0.07;
    vSiz = 0.001;
    lSiz = 0.001;
  }
  
  if(place == 'Las Vegas, NV'){
    mySiz = 0.001;
    hSiz = 0.001;
    vSiz = windowWidth*0.07;
    lSiz = 0.001;
  }
  
  if(place == 'London, ENG, UK'){
    mySiz = 0.001;
    hSiz = 0.001;
    vSiz = 0.001;
    lSiz = windowWidth*0.07;
  }
  
  h = hour();
  m = minute();
  
  if (m < 10){
    m = "0" + m;
  }
  
  
  var meridiem = "am"
  if (h > 12) {
    h = h - 12;
    meridiem = "pm";
  }   
  if (h == 0){
    h = 12;
  }
  myTime = h +':'+ m + meridiem;
  textSize(mySiz);
  text("In my location it is " + myTime + "!", windowWidth/2, windowHeight/2);
  
  
  hH = h - 6;
  if (hH > 12) {
    hH = hH - 12;
    meridiem = "pm";
  } 
  if (hH == 0){
    hH = 12;
  }
  honoluluTime = hH + ":" + m + meridiem;
  textSize(hSiz);
  text("In Honolulu it is " + honoluluTime + "!", windowWidth/2, windowHeight/2);
  
  
  vH = h - 3;
  if (vH > 12) {
    vH = vH - 12;
    meridiem = "pm";
  } 
  if (vH == 0){
    vH = 12;
  }
  vegasTime = vH + ":" + m + meridiem;
  textSize(vSiz);
  text("In Las Vegas it is " + vegasTime + "!", windowWidth/2, windowHeight/2);
  
  
  lH = h - 20;
  if (lH > 12) {
    lH = lH - 12;
    meridiem = "pm";
  } 
  if (lH == 0){
    lH = 12;
  }
  if (lH < 0){
    lH = 1;
  }
  if (lH < 12){
    meridiem = "am";
  }
  londonTime = lH + ":" + m + meridiem;
  textSize(lSiz);
  text("In London it is " + londonTime + "!", windowWidth/2, windowHeight/2)
  
  }