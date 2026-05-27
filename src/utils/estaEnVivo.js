const ZONA_HORARIA_ARGENTINA = 'America/Argentina/Buenos_Aires'

const DIAS_SEMANA = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

// Deja los textos en un formato facil de comparar: minusculas, sin tildes y sin espacios extra.
function normalizarTexto(texto = '') {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
}

// Toma una fecha cualquiera y la convierte a dia + minutos usando siempre la hora de Argentina.
function obtenerFechaArgentina(fecha) {
    const partes = new Intl.DateTimeFormat('es-AR', {
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: ZONA_HORARIA_ARGENTINA,
    }).formatToParts(fecha)

    const valorParte = (tipo) => partes.find((parte) => parte.type === tipo)?.value

    return {
        dia: normalizarTexto(valorParte('weekday')),
        minutos: Number(valorParte('hour')) * 60 + Number(valorParte('minute')),
    }
}

// Convierte textos como "Lunes a Viernes" o "Lunes y Miercoles" en una lista de dias.
function parsearDias(dia) {
    const diaNormalizado = normalizarTexto(dia)

    if (!diaNormalizado) {
        return []
    }

    // Caso rango: "lunes a viernes".
    if (diaNormalizado.includes(' a ')) {
        const [inicio, fin] = diaNormalizado.split(' a ').map((parte) => parte.trim())
        const indiceInicio = DIAS_SEMANA.indexOf(inicio)
        const indiceFin = DIAS_SEMANA.indexOf(fin)

        if (indiceInicio === -1 || indiceFin === -1) {
            return []
        }

        if (indiceInicio <= indiceFin) {
            return DIAS_SEMANA.slice(indiceInicio, indiceFin + 1)
        }

        // Caso rango que cruza el fin de semana: "viernes a lunes".
        return [...DIAS_SEMANA.slice(indiceInicio), ...DIAS_SEMANA.slice(0, indiceFin + 1)]
    }

    // Caso dias sueltos: "lunes y miercoles" o "lunes, miercoles".
    return diaNormalizado
        .split(/\s+y\s+|,\s*/)
        .map((parte) => parte.trim())
        .filter(Boolean)
}

// Convierte "10.30" en minutos desde medianoche: 10 * 60 + 30.
function parsearHora(hora) {
    const [horas = '0', minutos = '0'] = hora.trim().split('.')

    return Number(horas) * 60 + Number(minutos)
}

// Convierte "10.00 a 12.30" en un rango numerico comparable.
function parsearRangoHorario(horario) {
    const [inicio, fin] = normalizarTexto(horario).split(' a ')

    if (!inicio || !fin) {
        return null
    }

    return {
        inicio: parsearHora(inicio),
        fin: parsearHora(fin),
    }
}

// Compara la hora actual contra el rango; tambien soporta horarios que pasan medianoche.
function estaDentroDelHorario(minutosActuales, rangoHorario) {
    if (rangoHorario.inicio <= rangoHorario.fin) {
        return minutosActuales >= rangoHorario.inicio && minutosActuales < rangoHorario.fin
    }

    return minutosActuales >= rangoHorario.inicio || minutosActuales < rangoHorario.fin
}

// Funcion principal: une dia actual + hora actual + datos del programa y devuelve true o false.
function estaEnVivo(programa, fecha = new Date()) {
    if (!programa?.dia || !programa?.horario) {
        return false
    }

    const diasPrograma = parsearDias(programa.dia)
    const rangoHorario = parsearRangoHorario(programa.horario)
    const fechaArgentina = obtenerFechaArgentina(fecha)

    return Boolean(
        rangoHorario
        && diasPrograma.includes(fechaArgentina.dia)
        && estaDentroDelHorario(fechaArgentina.minutos, rangoHorario)
    )
}

export default estaEnVivo
