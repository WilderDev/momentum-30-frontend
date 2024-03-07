// * Helper
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://www.tsk.com';
  } else {
    return 'http://localhost:3000';
  }
}

export default getBaseUrl(); // * Usage
