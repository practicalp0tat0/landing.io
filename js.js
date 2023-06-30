let img =document.querySelector("img");

let x1=0;
let x2=0;
let x3=0;
let x4=0;

setInterval(update5,900)
function update5(){

      x1=Math.floor(Math.random()*(100-20)+20);
      x2=Math.floor(Math.random()*(100-20)+20);
      x3=Math.floor(Math.random()*(100-20)+20);
      x4=Math.floor(Math.random()*(100-20)+20);
      img.style.transitionDuration="2s"
      img.style.borderRadius=""+x1+"% "+  x2+"% " +x3+"% "+x4+"% "+"/"+x4+"% "+  x1+"% " +x2+"% "+x1+"% ";

}
img.style.borderColor="white"
img.style.borderRightColor="white"
img.style.borderLeftColor="white"
img.style.borderTopColor="white"
img.style.borderBottom="white"

img.style.borderRightColor="white"
img.style.borderStyle="solid"
img.style.borderBlockColor="white"
img.style.borderWidth="5px"

img.style.gridRowStart="6"
//img.style.borderRadius="50% 80% 80% 40%/ 40% 40% 70% 70%";
//img.style.borderRadius="50% 50% 60% 20% / 50% 50% 50% 10% ";
img.style.width="200px"
img.style.height="200px"
