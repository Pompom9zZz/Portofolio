function updateMenu() {
    const sectionAll = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sectionAll.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - (document.querySelector('header').offsetHeight / 2);
            const sectionId = current.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelector('nav ul li a[href="#' + sectionId + '"]').classList.add('active');
                console.log(sectionId);
            } else {
                document.querySelector('nav ul li a[href="#' + sectionId + '"]').classList.remove('active');
            }
        });
    });
}