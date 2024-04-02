document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    
    tooltipElements.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            
            const prevTooltip = document.querySelector('.tooltip_active');
            if (prevTooltip) {
                prevTooltip.classList.remove('tooltip_active');
                if (prevTooltip === element.nextElementSibling) {
                    return;
                }
            }
            
            let tooltip = element.nextElementSibling.classList.contains('tooltip') ? element.nextElementSibling : null;
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = element.getAttribute('title');
                element.insertAdjacentElement('afterend', tooltip);
            }
            
            const elementRect = element.getBoundingClientRect();
            tooltip.style.left = `${elementRect.left}px`;
            tooltip.style.top = `${elementRect.bottom}px`;
            
            tooltip.classList.add('tooltip_active');
        });
    });
});