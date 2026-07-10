// Siddiqui Steel Industry - JavaScript

// Loading screen: hide once the page has fully loaded
(function () {
  var loader = document.getElementById("loader");
  if (!loader) return;

  function hideLoader() {
    loader.classList.add("hidden");
    // remove from DOM after the fade-out transition
    setTimeout(function () {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 700);
  }

  // Wait for full load, but keep a minimum display time so the animation is visible
  var start = Date.now();
  var MIN_TIME = 1200; // ms

  window.addEventListener("load", function () {
    var elapsed = Date.now() - start;
    var remaining = Math.max(0, MIN_TIME - elapsed);
    setTimeout(hideLoader, remaining);
  });

  // Safety fallback: never let the loader get stuck
  setTimeout(hideLoader, 6000);
})();
