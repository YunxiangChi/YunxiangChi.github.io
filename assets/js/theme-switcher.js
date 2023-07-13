document.getElementById('theme-switcher').addEventListener('click', function() {
  var html = document.documentElement;
  var themeSwitcher = document.getElementById('theme-switcher');

  html.classList.toggle('dark-theme');

  if (html.classList.contains('dark-theme')) {
    themeSwitcher.innerHTML = '<i class="fa fa-moon"></i>';
    html.setAttribute('data-theme', 'dark');
  } else {
    themeSwitcher.innerHTML = '<i class="fa fa-sun"></i>';
    html.removeAttribute('data-theme');
  }
});
