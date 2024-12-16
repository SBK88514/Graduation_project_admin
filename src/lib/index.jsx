export function debounce(func, timeout = 1000) {
  // Create Variable
  let timer;
  return (...args) => {
    // Stop the previous Function
    clearTimeout(timer);
    // Start the function when the timeout done
    timer = setTimeout(() => func(args), timeout);
  };
}
