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

function loadRetex(img, title) {
    var opened = window.open("");
    opened.document.write("<!DOCTYPE html><html><head> <link href='./Retex.css' rel='stylesheet'><title>"+title+"</title></head><body><h1>" + title + "</h1><iframe src='" + img + "'type='application/pdf'/></body></html>");
}