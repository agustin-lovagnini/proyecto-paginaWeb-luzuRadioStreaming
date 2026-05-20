// MENÚ HAMBURGUESA
const buttonHamburguesa = document.querySelector('.menu-hamburguesa');
const menuItems = document.querySelectorAll('.contenido-menu');

buttonHamburguesa.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.classList.toggle('active');
    });
    buttonHamburguesa.classList.toggle('active');
    const icon = buttonHamburguesa.querySelector('i');
    if (buttonHamburguesa.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// MARQUEE EFECTO 
const contenedores = document.querySelectorAll(".mensaje-ondemand-contenido");

contenedores.forEach(contenedor => {
    const span = contenedor.querySelector("span");
    
    if (!span) return;
    
    const clon = span.cloneNode(true);
    span.parentNode.appendChild(clon);
    
    let pos = 0;
    const velocidad = 0.2;
    
    const anchoUnico = span.scrollWidth;

    function moverTexto() {
        pos -= velocidad;
        
        if (Math.abs(pos) >= anchoUnico) {
            pos = 0;
        }
        
        contenedor.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(moverTexto);
    }

    moverTexto();
});

