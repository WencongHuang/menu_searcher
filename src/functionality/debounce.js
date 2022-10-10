// Custom debounce function
const debounce = (callback, delay) => {
  let timer ;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return callback(...args);
    }, delay);
  };
};

export default debounce;