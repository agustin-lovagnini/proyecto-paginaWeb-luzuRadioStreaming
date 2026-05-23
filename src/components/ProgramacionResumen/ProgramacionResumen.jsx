import programacionResumen from '../../data/programacionResumen'
import './ProgramacionResumen.css'

function ProgramacionResumen() {
    return (
        <section className="programacion-resumen" aria-label="Dias y horarios de programas">
            <picture className="programacion-resumen__fondo">
                <source
                    media="(min-width: 1025px)"
                    srcSet="/img/fondos/fondos-seccion-galeria-programas/fondo-grilla-desktop.webp"
                    type="image/webp"
                />
                <img
                    src="/img/fondos/fondos-seccion-galeria-programas/fondo-grilla-mobile.webp"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                />
            </picture>

            <div className="programacion-resumen__contenido">
                <ul className="programacion-resumen__lista">
                    {programacionResumen.map((programa) => (
                        <li className="programacion-resumen__item" key={programa.nombre}>
                            <img src={programa.logo} alt={programa.nombre} loading="lazy" />

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
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProgramacionResumen