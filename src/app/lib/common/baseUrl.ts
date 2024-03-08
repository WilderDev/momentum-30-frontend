// * Helper
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://www.momentumthirty.com';
  } else {
    return 'http://localhost:3000';
  }
}

export default getBaseUrl(); // * Usage
