import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import programasGaleria from '../../data/programasGaleria'
import redesSociales from '../../data/redesSociales'
import './ProgramaDetalle.css'

function ProgramaDetalle() {
    const { slug } = useParams()
    const navegar = useNavigate()

    const programa = programasGaleria.find((programa) => programa.slug === slug)
    const equipo = programa?.equipo || [
        { nombre: 'Nombre Apellido', rol: 'Conductor' },
        { nombre: 'Nombre Apellido', rol: 'Panelista' },
        { nombre: 'Nombre Apellido', rol: 'Humor' },
    ]

    if (!programa) {
        return (
            <main className="programa-detalle">
                <h1>Programa no encontrado</h1>
            </main>
        )
    }

    const palabrasNombre = programa.nombre.split(' ')
    const ultimaPalabraNombre = palabrasNombre.pop()
    const inicioNombre = palabrasNombre.join(' ')
    const descripcionPrograma = programa.descripcion || 'El programa que te acompaña en el arranque del dia con humor, actualidad y el mejor equipo. Rompiendo la rutina desde temprano.'
    const redesPrograma = [
        {
            nombre: 'Instagram',
            url: programa.url,
            icono: 'fa-brands fa-instagram',
            color: '#e1306c',
        },
        {
            ...redesSociales.find((redSocial) => redSocial.nombre === 'YouTube'),
            color: '#ff0000',
        },
        {
            ...redesSociales.find((redSocial) => redSocial.nombre === 'Twitch'),
            color: '#9146ff',
        },
    ].filter((redSocial) => redSocial.url)

    return (
        <>
            <Header />

            <main className="programa-detalle">
                <button
                    type="button"
                    className="programa-detalle__boton-volver"
                    aria-label="Volver a la pagina anterior"
                    onClick={() => navegar(-1)}
                >
                    <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                </button>

                <section
                    className="programa-detalle__hero"
                    style={{
                        '--hero-imagen': programa.heroDetalle ? `url(${programa.heroDetalle})` : 'none',
                        '--hero-imagen-mobile': programa.heroDetalleMobile
                            ? `url(${programa.heroDetalleMobile})`
                            : programa.heroDetalle
                                ? `url(${programa.heroDetalle})`
                                : 'none',
                    }}
                >
                    <div className="programa-detalle__contenido">
                        <p className="programa-detalle__estado">Vivo</p>

                        <h1>
                            {inicioNombre && <span className="programa-detalle__titulo-linea">{inicioNombre}</span>}
                            <span className="programa-detalle__titulo-linea programa-detalle__titulo-linea--destacada">
                                {ultimaPalabraNombre}
                            </span>
                        </h1>

                        <nav className="programa-detalle__redes" aria-label={`Redes de ${programa.nombre}`}>
                            {redesPrograma.map((redSocial) => (
                                <a
                                    href={redSocial.url}
                                    key={redSocial.nombre}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={redSocial.nombre}
                                    style={{ '--color-red-programa': redSocial.color }}
                                >
                                    <i className={redSocial.icono} aria-hidden="true"></i>
                                </a>
                            ))}
                        </nav>

                        <p className="programa-detalle__descripcion programa-detalle__descripcion--hero">
                            {descripcionPrograma}
                        </p>

                        <div className="programa-detalle__horario">
                            {programa.horario ? (
                                <>
                                    <span>Horario</span>
                                    <strong>{programa.horario}</strong>
                                    <small>{programa.dia}</small>
                                </>
                            ) : (
                                <strong>{programa.etiqueta}</strong>
                            )}
                        </div>
                    </div>
                </section>

                <section className="programa-detalle__cuerpo">
                    <p className="programa-detalle__descripcion programa-detalle__descripcion--cuerpo">
                        {descripcionPrograma}
                    </p>

                    <div className="programa-detalle__equipo">
                        <h2>El equipo</h2>

                        <div className="programa-detalle__integrantes">
                            {equipo.map((integrante) => (
                                <article className="programa-detalle__integrante" key={`${programa.slug}-${integrante.nombre}`}>
                                    {integrante.foto ? (
                                        <img
                                            className="programa-detalle__avatar"
                                            src={integrante.foto}
                                            alt={integrante.nombre}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="programa-detalle__avatar"></div>
                                    )}
                                    <h3>{integrante.nombre}</h3>
                                    <p>{integrante.rol}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <aside className="programa-detalle__recientes">
                        <h2>Recientes</h2>

                        <article className="programa-detalle__reciente">
                            <div className="programa-detalle__reciente-imagen"></div>
                            <h3>Nota reciente del programa</h3>
                        </article>

                        <article className="programa-detalle__reciente">
                            <div className="programa-detalle__reciente-imagen"></div>
                            <h3>Otra charla destacada</h3>
                        </article>
                    </aside>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default ProgramaDetalle
