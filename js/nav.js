/* nav.js — highlight active nav link by matching pathname */
(function () {
  var raw  = window.location.pathname;
  /* normalise: strip trailing slash, treat root as "/" */
  var path = raw.replace(/\/$/, '') || '/';

  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').replace(/\/$/, '') || '/';
    /* exact match OR the link is a non-root prefix of the current path */
    if (href === path || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });
})();
