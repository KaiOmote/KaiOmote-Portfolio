function togglemenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const expandIcons = document.querySelectorAll('.expand-icon');

    expandIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const accordion = this.closest('.education-accordion');
            const isExpanded = accordion.classList.contains('expanded');

            // close sections
            document.querySelectorAll('.education-accordion').forEach(acc => {
                acc.classList.remove('expanded');
                acc.querySelector('.expand-icon').classList.remove('rotate');
            });
            // if section was closed, open
            if (!isExpanded) {
                accordion.classList.add('expanded');
                this.classList.add('rotate');
            }

            // figure out how to do this with toggle instead
            // accordion.classList.toggle('expanded');
            // accordion.querySelector('.expand-icon').classList.toggle('rotate');
        });
    });
});