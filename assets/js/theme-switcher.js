document.addEventListener('DOMContentLoaded', (event) => {
    const switcher = document.getElementById('theme-switcher');

    applyTheme();

    switcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        var currentClass = document.body.className;
        if (currentClass == 'dark-mode') {
            switcher.innerHTML = '<i class="fa fa-moon"></i>';
            // Store the theme in localStorage
            localStorage.setItem('theme', 'dark');
        } else {
            switcher.innerHTML = '<i class="fa fa-sun"></i>';
            // Store the theme in localStorage
            localStorage.setItem('theme', 'light');
        }
    });
});

function applyTheme() {
    var theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-switcher').innerHTML = '<i class="fa fa-moon"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-switcher').innerHTML = '<i class="fa fa-sun"></i>';
    }
}
