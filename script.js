let lastScrollTop = 0;
const topElement = document.querySelector('.top');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        topElement.classList.add('hidden');
    } else {
        topElement.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});
