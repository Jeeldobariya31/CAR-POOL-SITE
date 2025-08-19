// ------------------------------------------------------------
// Optional: Kinetic hover effect
// - Requires Kinet library (skips gracefully if absent)
// - Animates an element with id "circle" to follow the cursor
// ------------------------------------------------------------
(function initKinetEffect() {
  try {
    if (typeof Kinet === 'undefined') return; // Skip if library not loaded
    var kinet = new Kinet({
      acceleration: 0.02,
      friction: 0.25,
      names: ["x", "y"],
    });

    var circle = document.getElementById('circle');
    if (!circle) return; // Skip if target element is missing

    kinet.on('tick', function(instances) {
      circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
    });

    document.addEventListener('mousemove', function (event) {
      kinet.animate('x', event.clientX - window.innerWidth/2);
      kinet.animate('y', event.clientY - window.innerHeight/2);
    });
  } catch (e) {
    // Silent guard to avoid breaking UI in case of errors
  }
})();