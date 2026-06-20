import { Link } from 'react-router-dom'
import programacionResumen from '../../data/programacionResumen'
import programasGaleria from '../../data/programasGaleria'
import './ProgramacionResumen.css'

const normalizarNombre = (nombre) =>
    nombre
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

const aliasesProgramas = {
    'luzu te activa': 'luzu activa',
}

const coloresProgramas = {
    'luzu te activa': '#34e0c5',
    fm: '#ffffff',
    'antes que nadie': '#ff6ea8',
    'nadie dice nada': '#7a5cff',
    'el show del verano': '#39a7ff',
    'patria y familia': '#3756d8',
    'se fue larga': '#8a6bff',
    'fm al atardecer': '#ff8b27',
    'la novela': '#e4b64c',
    'los del fondo': '#54b56b',
    'los no talentos': '#ff846f',
    'un sabado mejor': '#f1c232',
    plp: '#ff5fc8',
    'edicion especial': '#f2a744',
    'algo de musica': '#5e8fff',
    'flasheando secuencia': '#ffffff',
    'luzu kids': '#ef4cff',
}

const obtenerDetalle = (programaResumen) => {
    const nombreNormalizado = normalizarNombre(programaResumen.nombre)
    const nombreBuscado = aliasesProgramas[nombreNormalizado] || nombreNormalizado

    return programasGaleria.find(
        (programaGaleria) => normalizarNombre(programaGaleria.nombre) === nombreBuscado,
    )
}

function ProgramacionResumen() {
    const programas = programacionResumen.map((programa) => ({
        ...programa,
        detalle: obtenerDetalle(programa),
    }))

    return (
        <section className="programacion-resumen" aria-label="Dias y horarios de programas">
            <div className="programacion-resumen__contenido">
                <ul className="programacion-resumen__lista">
                    {programas.map((programa) => {
                        const detalle = programa.detalle
                        const elenco = detalle?.equipo?.map((integrante) => integrante.nombre).join(', ')
                        const horario = programa.tipo || `${programa.dia} · ${programa.horario}`

                        const colorPrograma = coloresProgramas[normalizarNombre(programa.nombre)] || '#ff756b'

                        return (
                            <li
                                className="programacion-resumen__item"
                                key={programa.nombre}
                                style={{ '--programa-color': colorPrograma }}
                            >
                                <Link
                                    className="programacion-resumen__link"
                                    to={detalle?.slug ? `/programas/${detalle.slug}` : '#'}
                                >
                                    <img
                                        className="programacion-resumen__imagen"
                                        src={detalle?.fondo}
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                    />

                                    <span className="programacion-resumen__sombra" aria-hidden="true" />

                                    <img
                                        className={`programacion-resumen__elenco ${
                                            detalle?.mascaraElenco ? 'programacion-resumen__elenco--mascara' : ''
                                        }`}
                                        src={detalle?.elenco}
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                    />

                                    <span className="programacion-resumen__datos">
                                        <img
                                            className="programacion-resumen__logo"
                                            src={programa.logo}
                                            alt={programa.nombre}
                                            loading="lazy"
                                        />

                                        <span className="programacion-resumen__meta">
                                            {programa.tipo ? (
                                                <strong className="programacion-resumen__on-demand">
                                                    {programa.tipo}
                                                </strong>
                                            ) : (
                                                <>
                                                    <span className="programacion-resumen__dia">
                                                        {programa.dia}
                                                    </span>
                                                    <strong className="programacion-resumen__horario">
                                                        {programa.horario}
                                                    </strong>
                                                </>
                                            )}
                                        </span>

                                        <span className="programacion-resumen__expandido">
                                            <strong className="programacion-resumen__elenco-texto">
                                                {elenco}
                                            </strong>
                                            <span className="programacion-resumen__descripcion">
                                                {detalle?.descripcion}
                                            </span>
                                        </span>
                                    </span>

                                    <span className="sr-only">{`${programa.nombre}: ${horario}`}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ProgramacionResumen
