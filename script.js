const carouselText = [
    {text: "Sofa", color: "brown"},
    {text: "Lamp", color: "green"},
    {text: "Wall Mounts", color: "#6DB9EF"}
  ]

async function carousel(carouselList, eleRef) {
  var i = 0;
  while(true) {
    updateFontColor(eleRef, carouselList[i].color)
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if(i >= carouselList.length) {i = 0;}
  }
}

async function typeSentence(sentence, eleRef, delay = 100) {
const letters = sentence.split("");
let i = 0;
while(i < letters.length) {
  await waitForMs(delay);
  $(eleRef).append(letters[i]);
  i++
}
return;
}
async function deleteSentence(eleRef) {
const sentence = $(eleRef).html();
const letters = sentence.split("");
let i = 0;
while(letters.length > 0) {
  await waitForMs(100);
  letters.pop();
  $(eleRef).html(letters.join(""));
}
}


function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

function updateFontColor(eleRef, color) {
$(eleRef).css('color', color);
}
$(document).ready(async function(){
$(window).scroll(function () {
   var $nav = $("#nav1");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
 });
let autoArea = $(".autoText");
await carousel(carouselText,autoArea);


 $("#i2").append("<p>Is this working</p>") 
 

});