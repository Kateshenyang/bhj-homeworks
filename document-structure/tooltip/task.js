document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('.has-tooltip');

    tooltipElements.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            
            const prevTooltip = document.querySelector('.tooltip_active');
            if (prevTooltip) {
                if (prevTooltip.previousElementSibling === element) {
                    prevTooltip.remove();
                } else {
                    prevTooltip.remove();
                }
            }
            
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip_active';
            tooltip.textContent = element.getAttribute('title');
            
            const elementRect = element.getBoundingClientRect();
            tooltip.style.left = `${elementRect.left}px`;
            tooltip.style.top = `${elementRect.bottom + window.scrollY}px`;
            
            element.insertAdjacentElement('afterend', tooltip);
        });
    });
});