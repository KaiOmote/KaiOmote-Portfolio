function togglemenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const expandIcons = document.querySelectorAll('.expand-icon');

    // for transition smoothing of open sections
    // do it for all open sections just in case. 
    // define height here, before any click logic
    document.querySelectorAll('.education-accordion.expanded').forEach(acc => {
        const accordionText = acc.querySelector('.accordion-text');
        const contentHeight = accordionText.scrollHeight + 'px';
        accordionText.style.height = contentHeight;
    });

    expandIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const accordion = this.closest('.education-accordion');
            const accordionText = accordion.querySelector('.accordion-text')
            const isExpanded = accordion.classList.contains('expanded');

            // close sections
            document.querySelectorAll('.education-accordion').forEach(acc => {
                // for transition smoothing. 
                // reset height to 0px
                const accText = acc.querySelector('.accordion-text');
                accText.style.height = '0px';

                acc.classList.remove('expanded');
                acc.querySelector('.expand-icon').classList.remove('rotate');
            });
            // if section was closed, open
            if (!isExpanded) {
                // for transition smoothing.
                // manually calculate height and set style accordingly
                const contentHeight = accordionText.scrollHeight + 'px';
                console.log(contentHeight);
                accordionText.style.height = contentHeight;

                accordion.classList.add('expanded');
                this.classList.add('rotate');
            }
        });
    });
});
