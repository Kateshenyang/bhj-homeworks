document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const toggleVisibility = () => {
        reveals.forEach(reveal => {
            const { top, bottom } = reveal.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
});