const rutaAsset = (ruta) => `${import.meta.env.BASE_URL}${ruta.replace(/^\/+/, '')}`

export default rutaAsset
