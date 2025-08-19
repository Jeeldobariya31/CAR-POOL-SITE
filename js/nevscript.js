// ------------------------------------------------------------
// Navigation Active State
// - Highlights the current page in the navbar
// - Keeps a safe fallback if route doesn't match
// - Leaves room for future responsive logic
// ------------------------------------------------------------
(function initNavigationActiveState() {
  try {
    const nav = document.querySelector('.navigation');
    if (!nav) return;

    const listItems = nav.querySelectorAll('ul li');
    const links = nav.querySelectorAll('ul li a');
    const currentPath = (location.pathname || '').split('/').pop();

    let matched = false;
    links.forEach((a) => {
      const href = (a.getAttribute('href') || '').split('/').pop();
      if (href && currentPath && href.toLowerCase() === currentPath.toLowerCase()) {
        const li = a.closest('li');
        if (li) {
          listItems.forEach(li2 => li2.classList.remove('active'));
          li.classList.add('active');
          matched = true;
        }
      }
    });

    // Fallback: if nothing matched, set the first as active to keep indicator in a valid position
    if (!matched && listItems.length) {
      listItems.forEach(li2 => li2.classList.remove('active'));
      listItems[0].classList.add('active');
    }

    // Recalculate indicator position on resize (placeholder for future needs)
    window.addEventListener('resize', () => {
      // No JS positioning required because indicator uses CSS sibling selectors.
      // This event listener is kept for future extensibility.
    });
  } catch (e) {
    // Silent guard: never block the UI due to nav script errors
  }
})();