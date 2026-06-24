import { Link } from 'react-router-dom'
import programasGaleria from '../../data/programasGaleria'
import rutaAsset from '../../utils/rutaAsset'
import './GaleriaProgramas.css'

function GaleriaProgramas() {
    return (
        <section className="galeria-programas">
            <picture className="galeria-programas__fondo">
                <source
                    media="(min-width: 1920px)"
                    srcSet={rutaAsset('img/fondos/fondos-main/fondo-pagina-index/fondo-main-desktop-2560×1440.webp')}
                    type="image/webp"
                />
                <source
                    media="(min-width: 1025px)"
                    srcSet={rutaAsset('img/fondos/fondos-main/fondo-pagina-index/fondo-main-desktop.webp')}
                    type="image/webp"
                />
                <img
                    src={rutaAsset('img/fondos/fondos-main/fondo-pagina-index/fondo-main-mobile-tablet.webp')}
                    alt="Fondo principal de la pagina de inicio de Luzu TV"
                />
            </picture>

            <div className="galeria-programas__lista">
                {programasGaleria.map((programa) => (
                    <article className="galeria-programas__programa" key={programa.nombre}>
                        <Link to={`/programas/${programa.slug}`}>
                            <img
                                className="galeria-programas__imagen"
                                src={programa.fondo}
                                alt={programa.nombre}
                                loading="lazy"
                            />

                            <div className="galeria-programas__superpuesta">
                                <p className="galeria-programas__texto">
                                    {programa.etiqueta ? (
                                        <span>{programa.etiqueta}</span>
                                    ) : (
                                        <>
                                            <span>{programa.dia}</span>
                                            <span>{programa.horario}</span>
                                        </>
                                    )}
                                </p>

                                <img
                                    className="galeria-programas__elenco"
                                    style={{
                                        '--ancho-elenco': programa.anchoElenco,
                                        '--derecha-elenco': programa.derechaElenco,
                                    }}
                                    src={programa.elenco}
                                    alt={`Elenco de ${programa.nombre}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default GaleriaProgramas
