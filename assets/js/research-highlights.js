(function () {
  var highlightedClass = "is-highlighted";
  var highlightDuration = 5000;
  var highlightTimer;

  function clearHighlight(id) {
    document.querySelectorAll(".publication-entry." + highlightedClass).forEach(function (entry) {
      entry.classList.remove(highlightedClass);
    });

    if (id && decodeURIComponent(window.location.hash.slice(1)) === id) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  function highlightEntry(id) {
    window.clearTimeout(highlightTimer);
    clearHighlight();

    if (!id) return;

    var entry = document.getElementById(id);
    if (entry && entry.classList.contains("publication-entry")) {
      entry.classList.add(highlightedClass);
      highlightTimer = window.setTimeout(function () {
        clearHighlight(id);
      }, highlightDuration);
    }
  }

  function highlightFromHash() {
    highlightEntry(decodeURIComponent(window.location.hash.slice(1)));
  }

  document.querySelectorAll('.research-links a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      highlightEntry(decodeURIComponent(link.getAttribute("href").slice(1)));
    });
  });

  window.addEventListener("hashchange", highlightFromHash);
  highlightFromHash();
})();
