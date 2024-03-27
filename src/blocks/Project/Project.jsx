import "./Project.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

function Project() {
    return(
        <>
            <Header/>
            <main className="project">

            <iframe className="project__video" width="100%" height="50vh" src="https://www.youtube.com/embed/X746TvaczcU?si=QOrDUUf0hiunxMGT&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </main>
            <Footer/>
        </>
    )
}

export default Project