import './MarquesinaOndemand.css'

const mensajes = [
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
    'ON DEMAND',
    'EN VIVO',
]

function MarquesinaOndemand() {
    return (
        <div className="marquesina-ondemand">
            <div className="marquesina-ondemand__contenido">
                <div className="marquesina-ondemand__grupo">
                    {mensajes.map((mensaje, indice) => (
                        <span key={`grupo-1-${mensaje}-${indice}`}>
                            {mensaje}
                        </span>
                    ))}
                </div>

                <div className="marquesina-ondemand__grupo" aria-hidden="true">
                    {mensajes.map((mensaje, indice) => (
                        <span key={`grupo-2-${mensaje}-${indice}`}>
                            {mensaje}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MarquesinaOndemand