document.addEventListener('DOMContentLoaded', (event) => {
    const switcher = document.getElementById('theme-switcher');

    switcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        var currentClass = document.body.className;
        if (currentClass == 'dark-mode') {
            switcher.innerHTML = '<i class="fa fa-moon"></i>';
        } else {
            switcher.innerHTML = '<i class="fa fa-sun"></i>';
        }
    });
});
