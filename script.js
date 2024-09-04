document.addEventListener('DOMContentLoaded', () => {
    const scrollLine = document.querySelector('.scroll-line');
    const scrollContent = document.querySelector('.scroll-content');
    const scrollContentWidth = scrollContent.scrollWidth;

    // Duplicate content to create a seamless loop
    scrollLine.style.width = `${scrollContentWidth * 2}px`;

    // Reset the animation once it finishes
    scrollLine.addEventListener('animationiteration', () => {
        scrollLine.style.transform = 'translateX(0)';
    });
});
