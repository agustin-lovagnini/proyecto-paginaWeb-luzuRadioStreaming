import Header from '../../components/Header'
import SeccionResumido from '../../components/SeccionResumido'
import MarquesinaOndemand from '../../components/MarquesinaOndemand'
import StreamingEnVivo from '../../components/StreamingEnVivo'
import ProgramacionResumen from '../../components/ProgramacionResumen'
import GaleriaProgramas from '../../components/GaleriaProgramas'
import Footer from '../../components/Footer'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <main className="pagina-inicio">
        <SeccionResumido />
        <MarquesinaOndemand />
        <StreamingEnVivo />
        <MarquesinaOndemand />
        <ProgramacionResumen />
        <GaleriaProgramas />
        <MarquesinaOndemand />
      </main>
      <Footer />
    </>
  )
}

export default Home
