import './Main.css'
import magnumTitle from '../../img/magnum-logo.png'
import bloggersGirl from '../../img/portfolio-bloggers.gif'
import alphaImage from '../../img/alfa.png'
import urbanImage from '../../img/urban-forum.png'
import circle from '../../img/circle.svg'
// import star from '../../img/star.svg'
// import add from '../../img/add-section.png'

function Main() {
    return (
        <main className='main'>
            <img className='main__title-img' src={magnumTitle} alt='magnum digital studio'/>
            <p className='main__subtitle'>Диджитал студия производства контента и игр в метавселенных</p>
            <div className='main__grid'>
                <img className='main__grid-item main__grid-item1' src={bloggersGirl} alt='magnum digital studio'/>
                <img className='main__grid-item main__grid-item2' src={alphaImage} alt='magnum digital studio'/>
                <img className='main__grid-item main__grid-item3' src={urbanImage} alt='magnum digital studio'/>
            </div>
            <img className='main__circle' src={circle} alt='circled letters'/>
            <p className='main__weDo'>мы создаем</p>
            <div className='main__services'>
                <div className='main__section section1'><p className='main__section-title'>РЕКЛАМА</p></div>
                <div className='main__section section2'><p className='main__section-title'>MOTION</p></div>
                <div className='main__section section3'><p className='main__section-title'>AVATAR</p></div>
                <div className='main__section section4'><p className='main__section-title'>METAVERSE</p></div>
            </div>
        </main>
    );
}

export default Main;