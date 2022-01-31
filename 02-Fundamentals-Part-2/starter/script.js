'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// Function

const color_lawn = {
  color: '#00FF00',
  rating: 0,
};

const rateColor = (color, rating) => {
  console.log(color);
  console.log(rating);

  return { ...color, rating };
};
console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
