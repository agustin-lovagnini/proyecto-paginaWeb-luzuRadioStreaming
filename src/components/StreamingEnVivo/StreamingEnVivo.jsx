import './StreamingEnVivo.css'

function StreamingEnVivo() {
    return (
        <section className="seccion-streaming-en-vivo">
            <picture className="seccion-streaming-en-vivo__fondo">
                <source
                    media="(min-width: 1025px)"
                    srcSet="/img/fondos/fondos-seccion-inicial/fondo-streaming-en-vivo-desktop.webp"
                    type="image/webp"
                />

                <img
                    src="/img/fondos/fondos-seccion-inicial/fondo-streaming-en-vivo-mobile-tablet.webp"
                    alt="Fondo de la seccion de streaming en vivo de Luzu TV"
                />
            </picture>

            <div className="seccion-streaming-en-vivo__video">
                <iframe
                    src="https://www.youtube.com/embed/live_stream?channel=UCTHaNTsP7hsVgBxARZTuajw"
                    title="Streaming en vivo de Luzu TV"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    )
}

export default StreamingEnVivo