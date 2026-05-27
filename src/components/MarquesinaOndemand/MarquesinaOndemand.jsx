import MarqueeModule from 'react-fast-marquee'
import './MarquesinaOndemand.css'

const Marquee = MarqueeModule.default?.default || MarqueeModule.default || MarqueeModule

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
            <Marquee
                autoFill
                className="marquesina-ondemand__contenido"
                gradient={false}
                pauseOnHover={false}
                speed={28}
            >
                <div className="marquesina-ondemand__grupo">
                    {mensajes.map((mensaje, indice) => (
                        <span key={`${mensaje}-${indice}`}>
                            {mensaje}
                        </span>
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default MarquesinaOndemand
