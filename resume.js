document.addEventListener('DOMContentLoaded', () => {
    const iconContainers = document.querySelectorAll('.icon-container');

    iconContainers.forEach(container => {
        container.addEventListener('click', () => {
            const sectionId = container.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    function scrollToSection(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
