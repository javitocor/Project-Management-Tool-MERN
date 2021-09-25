/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
function generateColor(number) {
  var colorArray = [];
  // eslint-disable-next-line no-var
  for(var i = 0; i < number; i++) {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255); 
    const rgb = `rgb(${r},${g},${b}, 0.2)`;
    colorArray.push(rgb);
  }
  return colorArray;
};

export default generateColor;