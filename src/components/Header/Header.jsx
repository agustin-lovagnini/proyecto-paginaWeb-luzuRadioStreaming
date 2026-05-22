import { useState } from 'react'
import redesSociales from '../../data/redesSociales'
import './Header.css'

function Header() {
    const [menuAbierto, cambiarMenuAbierto] = useState(false)

    return (
        <header className="encabezado-sitio">
            <a href="/" className="encabezado-sitio__logo">
                <img src="/img/logos/logo-header.webp" alt="Luzu TV" />
            </a>

            {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
            <button
                type="button"
                className="encabezado-sitio__boton-menu"
                aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'}
                aria-expanded={menuAbierto}
                onClick={() => cambiarMenuAbierto(!menuAbierto)}
            >
                {menuAbierto ? 'X' : '\u2630'}
            </button>

            {/* Menú de navegación, visible solo en dispositivos móviles cuando el menú está abierto */}
            {menuAbierto && (
                <nav
                    className="encabezado-sitio__menu"
                    aria-label="Redes sociales"
                >
                    <ul className="encabezado-sitio__redes">
                        {redesSociales.map((redSocial) => (
                            <li key={redSocial.nombre}>
                                <a
                                    href={redSocial.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={redSocial.nombre}
                                    style={{ '--color-red-social': redSocial.color }}
                                >
                                    <i className={redSocial.icono} aria-hidden="true"></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://www.youtube.com/channel/UCTHaNTsP7hsVgBxARZTuajw/live"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="encabezado-sitio__boton-vivo"
                    >
                        <span className="fa fa-circle" aria-hidden="true"></span>
                        <span>VIVO</span>
                    </a>
                    <a
                        href="https://luzutv.shop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="encabezado-sitio__tienda"
                    >
                        <img
                            src="/img/logos/diseño-tienda.webp"
                            alt="Tienda de Luzu TV"
                            loading="lazy"
                        />
                    </a>
                </nav>
            )}





        </header>
    )

}

export default Header
