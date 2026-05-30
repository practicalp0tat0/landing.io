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





/*satrt of the color chaning of the Rainbow and the Noir functions */

// Wait a tiny moment for the HTML to exist, then start
window.onload = function() {
  // --- Rainbow effect ---
  const rainbowEls = document.querySelectorAll('.Rainbow');
  let hue = 0;
  setInterval(() => {
    for (let i = 0; i < rainbowEls.length; i++) {
      rainbowEls[i].style.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    hue = (hue + 1) % 360;
  }, 30);

  // --- Noir effect ---
  const noirEls = document.querySelectorAll('.Noir');
  let lightness = 0;
  let direction = 1;
  setInterval(() => {
    for (let i = 0; i < noirEls.length; i++) {
      noirEls[i].style.color = 'hsl(0, 0%, ' + lightness + '%)';
    }
    lightness += direction;
    if (lightness >= 100) direction = -1;
    if (lightness <= 0) direction = 1;
  }, 30);
};

/*end of the color chaning of the Rainbow and the Noir functions */
