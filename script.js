document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const handle = document.querySelector('.slider-handle');
    const afterImage = document.querySelector('.after');

    slider.addEventListener('mousemove', (e) => {
        let offsetX = e.clientX - slider.getBoundingClientRect().left;
        offsetX = Math.max(0, Math.min(offsetX, slider.clientWidth));
        handle.style.left = `${offsetX}px`;
        afterImage.style.clip = `rect(0, ${offsetX}px, 3188px, 0)`;
    });
});
