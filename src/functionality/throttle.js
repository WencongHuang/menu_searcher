// Custom throttle
const throttle = (callback, delay) => {
  let run = false;
  return (...args) => {
    if(!run) {
      callback(...args);
      run = true;
      setTimeout(() => run = false, delay);
    }
  };
}

export default throttle;