import rutaAsset from '../utils/rutaAsset'

const programacionResumen = [
    {
        nombre: 'Luzu te activa',
        logo: 'img/programas/programas/luzu-activa/logo-luzu-activa.webp',
        dia: 'lunes a viernes',
        horario: '6.50 a 7.00',
    },
    {
        nombre: 'FM',
        logo: 'img/programas/programas/fm/fm-amanecer/logo-fm.webp',
        dia: 'lunes a viernes',
        horario: '7.00 a 8.00',
    },
    {
        nombre: 'Antes que nadie',
        logo: 'img/programas/programas/antes-que-nadie/logo-antes-que-nadie.webp',
        dia: 'lunes a viernes',
        horario: '8.00 a 10.00',
    },
    {
        nombre: 'Nadie dice nada',
        logo: 'img/programas/programas/nadie-dice-nadie/logo-nadie-dice-nada.webp',
        dia: 'lunes a viernes',
        horario: '10.00 a 12.30',
    },
    {
        nombre: 'El show del verano',
        logo: 'img/programas/programas/el-show-del-verano/logo-show-del-verano.webp',
        dia: 'lunes a viernes',
        horario: '12.30 a 13.30',
    },
    {
        nombre: 'Patria y familia',
        logo: 'img/programas/programas/patria-y-familia/logo-patria-y-familia.webp',
        dia: 'lunes a viernes',
        horario: '13.30 a 15.30',
    },
    {
        nombre: 'Se fue larga',
        logo: 'img/programas/programas/se-fue-larga/logo-se-fue-larga.webp',
        dia: 'lunes a viernes',
        horario: '15.30 a 17.30',
    },
    {
        nombre: 'FM al atardecer',
        logo: 'img/programas/programas/fm/fm-atardecer/logo-fm-atardecer.webp',
        dia: 'lunes a viernes',
        horario: '17.30 a 18.30',
    },
    {
        nombre: 'La novela',
        logo: 'img/programas/programas/la-novela/logo-la-novela.webp',
        dia: 'lunes y miercoles',
        horario: '18.30 a 20.00',
    },
    {
        nombre: 'Los del fondo',
        logo: 'img/programas/programas/los-del-fondo/logo-los-del-fondo.webp',
        dia: 'martes',
        horario: '18.30 a 20.00',
    },
    {
        nombre: 'Los no talentos',
        logo: 'img/programas/programas/los-no-talentos/logo-los-no-talentos.webp',
        dia: 'jueves',
        horario: '18.30 a 19.30',
    },
    {
        nombre: 'Un sabado mejor',
        logo: 'img/programas/programas/un-sabado-mejor/logo-un-sabado-mejor.webp',
        dia: 'sabado',
        horario: '9.00 a 11.00',
    },
    {
        nombre: 'PLP',
        logo: 'img/programas/programas/plp/logo-plp.webp',
        dia: 'sabado',
        horario: '11.00 a 13.00',
    },
    {
        nombre: 'Edicion especial',
        logo: 'img/programas/programas/edicion-especial/logo-edicion-especial.webp',
        tipo: 'on demand',
    },
    {
        nombre: 'Algo de musica',
        logo: 'img/programas/programas/algo-de-musica/logo-algo-de-musica.webp',
        tipo: 'on demand',
    },
    {
        nombre: 'Flasheando secuencia',
        logo: 'img/programas/programas/flasheando-secuencia/logo-flasheando-secuencia.webp',
        tipo: 'on demand',
    },
    {
        nombre: 'Luzu kids',
        logo: 'img/programas/programas/luzu-kids/logo-luzu-kids.webp',
        tipo: 'on demand',
    },
]

export default programacionResumen.map((programa) => ({
    ...programa,
    logo: rutaAsset(programa.logo),
}))
