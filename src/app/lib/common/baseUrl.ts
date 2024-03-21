// * Helper
export function getFEBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://www.momentumthirty.com';
  } else {
    return 'http://localhost:3000';
  }
}

export function getBEBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://momentum-30-backend.onrender.com';
  } else {
    return 'http://localhost:5000';
  }
}
