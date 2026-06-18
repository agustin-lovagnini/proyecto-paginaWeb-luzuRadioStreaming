import { useState } from 'react'
import { Link } from 'react-router-dom'
import redesSociales from '../../data/redesSociales'
import rutaAsset from '../../utils/rutaAsset'
import BotonVivo from '../BotonVivo'
import './Header.css'

function Header() {
    const [menuAbierto, cambiarMenuAbierto] = useState(false)

    const redesHeader = redesSociales.filter((redSocial) =>
        redSocial.mostrarEn.includes('header')
    )

    return (
        <header className="encabezado-sitio">
            <Link to="/" className="encabezado-sitio__logo">
                <img src={rutaAsset('img/logos/logo-header.webp')} alt="Luzu TV" />
            </Link>

            <button
                type="button"
                className="encabezado-sitio__boton-menu"
                aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'}
                aria-expanded={menuAbierto}
                onClick={() => cambiarMenuAbierto(!menuAbierto)}
            >
                {menuAbierto ? 'X' : '\u2630'}
            </button>

            <nav
                className={`encabezado-sitio__menu ${menuAbierto ? 'encabezado-sitio__menu--abierto' : ''}`}
                aria-label="Redes sociales"
            >
                <ul className="encabezado-sitio__redes">
                    {redesHeader.map((redSocial) => (
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
                        src={rutaAsset('img/logos/diseno-tienda.webp')}
                        alt="Tienda de Luzu TV"
                        loading="lazy"
                    />
                </a>
            </nav>

            <BotonVivo />
        </header>
    )
}

export default Header
