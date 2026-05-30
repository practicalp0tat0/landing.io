let img =document.querySelector("img");

let x1=0;
let x2=0;
let x3=0;
let x4=0;




/*satrt of the color chaning of the Rainbow and the Noir functions */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const rainbowElements = document.querySelectorAll('.Rainbow');
  const noirElements = document.querySelectorAll('.Noir');

  let startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime; // ms

    // Rainbow: cycle hue from 0 to 360 over 5 seconds
    const rainbowHue = (elapsed % 5000) / 5000 * 360;
    const rainbowColor = `hsl(${rainbowHue}, 100%, 50%)`;
    rainbowElements.forEach(el => (el.style.color = rainbowColor));

    // Noir: lightness goes 0% → 100% → 0% over 4 seconds (triangle wave)
    const noirCycle = (elapsed % 4000) / 4000;
    const noirLightness = noirCycle <= 0.5
      ? noirCycle * 2          // 0→1 in first half
      : (1 - noirCycle) * 2;   // 1→0 in second half
    const noirColor = `hsl(0, 0%, ${Math.round(noirLightness * 100)}%)`;
    noirElements.forEach(el => (el.style.color = noirColor));

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});

/*end of the color chaning of the Rainbow and the Noir functions */


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
