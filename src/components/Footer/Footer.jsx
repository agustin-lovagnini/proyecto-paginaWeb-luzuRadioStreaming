import redesSociales from '../../data/redesSociales'
import './Footer.css'

function Footer() {
    const redesFooter = redesSociales.filter((redSocial) =>
        redSocial.mostrarEn.includes('footer')
    )

    return (
        <>
            <footer className="pie-sitio">
                <div className="pie-sitio__contenedor">
                    <div className="pie-sitio__logo">
                        <a href="/">
                            <img
                                src="/img/logos/logo-footer.webp"
                                alt="Logo Luzu TV"
                                loading="lazy"
                            />
                        </a>
                    </div>

                    <nav className="pie-sitio__nav" aria-label="Redes sociales de Luzu TV">
                        <ul className="pie-sitio__redes">
                            {redesFooter.map((redSocial) => (
                                <li className="pie-sitio__red" key={redSocial.nombre}>
                                    <a
                                        href={redSocial.url}
                                        aria-label={redSocial.nombre}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={redSocial.icono} aria-hidden="true"></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <p className="pie-sitio__copyright">
                    © 2021 LuzuTv. Todos los derechos reservados.
                </p>
            </footer>

            <p className="aviso-desarrollo">
                Esta pagina web esta creada exclusivamente como material de desarrollo y estudio. No tiene fines de lucro ni utiliza informacion para otros propositos
            </p>
        </>
    )
}

export default Footer