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


      /*satrt of the color chaning of the Rainbow and the Noir functions */

      // ---------- add this inside update5() ----------
      // Get all elements with the classes (do this each time in case they change)
      var rainbowEls = document.querySelectorAll('.Rainbow');
      var noirEls = document.querySelectorAll('.Noir');

      // --- Rainbow: step the hue forward each call ---
      if (typeof rainbowHue === 'undefined') { rainbowHue = 0; } // ensure variable exists
      rainbowHue = (rainbowHue + 30) % 360;  // jump by 30° every 900ms (approx 10s full cycle)
      for (var i = 0; i < rainbowEls.length; i++) {
        rainbowEls[i].style.color = 'hsl(' + rainbowHue + ', 100%, 50%)';
      }

      // --- Noir: move lightness back and forth ---
      if (typeof noirLightness === 'undefined') { noirLightness = 0; noirDir = 1; }
      noirLightness += noirDir * 5;  // step by 5% each call (0→100 in ~18s)
      if (noirLightness >= 100) { noirLightness = 100; noirDir = -1; }
      if (noirLightness <= 0)   { noirLightness = 0;   noirDir = 1; }
      for (var j = 0; j < noirEls.length; j++) {
        noirEls[j].style.color = 'hsl(0, 0%, ' + noirLightness + '%)';
      }
      
      /*end of the color chaning of the Rainbow and the Noir functions */


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






