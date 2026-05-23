import './SeccionResumido.css'

function SeccionResumido() {
    return (
        <section className="seccion-resumido">
            <h2 className="seccion-resumido__titulo">
                TODAS LAS NOTICIAS RESUMIDAS EN UN SOLO LUGAR
            </h2>

            <div className="seccion-resumido__contenido">
                <div className="seccion-resumido__decoracion">
                    <img
                        className="seccion-resumido__r"
                        src="img/logos/R-resumido.webp"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="seccion-resumido__flechas seccion-resumido__flechas--volteadas"
                        src="img/ilustraciones/flechas-negras.webp"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="seccion-resumido__flechas seccion-resumido__flechas--volteadas seccion-resumido__flechas--blancas"
                        src="img/ilustraciones/flechas-blancas.webp"
                        alt=""
                        aria-hidden="true"
                    />
                </div>

                <h3 className="seccion-resumido__marca">
                    <a
                        href="https://www.resumido.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        RESUMIDO
                    </a>
                </h3>

                <div className="seccion-resumido__decoracion">
                    <img
                        className="seccion-resumido__flechas seccion-resumido__flechas--blancas"
                        src="img/ilustraciones/flechas-blancas.webp"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="seccion-resumido__flechas"
                        src="img/ilustraciones/flechas-negras.webp"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="seccion-resumido__r"
                        src="img/logos/R-resumido.webp"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    )
}

export default SeccionResumido