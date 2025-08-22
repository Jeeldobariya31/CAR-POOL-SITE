(function () {
  const STORAGE_KEY = 'site-theme';
  const DEFAULT_THEME = 'dark';

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    } catch (_) {
      return DEFAULT_THEME;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function createToggle() {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'Toggle light/dark theme');
    btn.innerHTML = getIconHtml(getStoredTheme());
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
      btn.innerHTML = getIconHtml(next);
    });
    document.body.appendChild(btn);
  }

  function getIconHtml(theme) {
    // Sun for light, moon for dark
    if (theme === 'light') {
      return '<i class="fa-solid fa-sun"></i>';
    }
    return '<i class="fa-solid fa-moon"></i>';
  }

  // Initialize as soon as DOM is ready
  function init() {
    const initial = getStoredTheme();
    applyTheme(initial);
    // Defer toggle creation until body exists
    if (document.body) {
      createToggle();
    } else {
      window.addEventListener('DOMContentLoaded', createToggle, { once: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();


