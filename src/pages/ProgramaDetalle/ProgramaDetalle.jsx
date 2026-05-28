import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import programasGaleria from '../../data/programasGaleria'
import programacionResumen from '../../data/programacionResumen'
import redesSociales from '../../data/redesSociales'
import estaEnVivo from '../../utils/estaEnVivo'
import './ProgramaDetalle.css'

const normalizarNombre = (nombre) =>
    nombre
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

function ProgramaDetalle() {
    const { slug } = useParams()
    const navegar = useNavigate()
    const [ahora, setAhora] = useState(() => new Date())

    const programa = programasGaleria.find((programa) => programa.slug === slug)
    const equipo = programa?.equipo || [
        { nombre: 'Nombre Apellido', rol: 'Conductor' },
        { nombre: 'Nombre Apellido', rol: 'Panelista' },
        { nombre: 'Nombre Apellido', rol: 'Humor' },
    ]

    useEffect(() => {
        const intervalo = window.setInterval(() => {
            setAhora(new Date())
        }, 60000)

        return () => window.clearInterval(intervalo)
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [slug])

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
    const nombreProgramaNormalizado = normalizarNombre(programa.nombre)
    const programaResumen = programacionResumen.find((programaResumen) =>
        normalizarNombre(programaResumen.nombre) === nombreProgramaNormalizado
        || (programa.slug === 'luzu-activa' && programaResumen.nombre === 'Luzu te activa')
    )
    const logoPrograma = programa.logo || programaResumen?.logo
    const rutaLogoPrograma = logoPrograma?.startsWith('/') ? logoPrograma : `/${logoPrograma}`
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
    const programaEstaEnVivo = estaEnVivo(programa, ahora)
    const programasConHorario = programasGaleria.filter((programaGaleria) => programaGaleria.horario)
    const indiceProgramaActual = programasConHorario.findIndex((programaGaleria) => programaGaleria.slug === programa.slug)
    const proximosProgramas = indiceProgramaActual === -1
        ? programasConHorario.slice(0, 4)
        : [
            ...programasConHorario.slice(indiceProgramaActual + 1),
            ...programasConHorario.slice(0, indiceProgramaActual),
        ].slice(0, 4)

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
                    <div className="programa-detalle__hero-imagen" aria-hidden="true"></div>

                    {rutaLogoPrograma && (
                        <img
                            className="programa-detalle__logo programa-detalle__logo--desktop"
                            src={rutaLogoPrograma}
                            alt=""
                            aria-hidden="true"
                        />
                    )}

                    <div className="programa-detalle__contenido">
                        {programaEstaEnVivo && (
                            <p className="programa-detalle__estado">Vivo</p>
                        )}

                        <h1>
                            {inicioNombre && <span className="programa-detalle__titulo-linea">{inicioNombre}</span>}
                            <span className="programa-detalle__titulo-linea programa-detalle__titulo-linea--destacada">
                                {ultimaPalabraNombre}
                            </span>
                        </h1>

                        <p className="programa-detalle__horario-hero">
                            {programa.horario ? (
                                <>
                                    <span>{programa.dia}</span>
                                    <span>{programa.horario}</span>
                                </>
                            ) : (
                                programa.etiqueta
                            )}
                        </p>

                        <p className="programa-detalle__descripcion programa-detalle__descripcion--hero">
                            {descripcionPrograma}
                        </p>

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

                        {rutaLogoPrograma && (
                            <img
                                className="programa-detalle__logo programa-detalle__logo--mobile"
                                src={rutaLogoPrograma}
                                alt={`Logo de ${programa.nombre}`}
                            />
                        )}
                    </div>
                </section>

                <section className="programa-detalle__cuerpo">
                    <div className="programa-detalle__principal">
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

                        <section className="programa-detalle__proximos" aria-labelledby="programa-detalle-proximos">
                            <h2 id="programa-detalle-proximos">Proximos programas</h2>

                            <div className="programa-detalle__proximos-lista">
                                {proximosProgramas.map((proximoPrograma) => (
                                    <article className="programa-detalle__proximo" key={proximoPrograma.slug}>
                                        <span>{proximoPrograma.horario}</span>
                                        <strong>{proximoPrograma.nombre}</strong>
                                        <p>{proximoPrograma.descripcion}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
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
