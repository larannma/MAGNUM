import './Main.css'
import magnumTitle from '../../img/magnum-logo.png'

function Main() {
    return (
        <main className='main'>
            <div className='main__container'>
                <div>
                    <img className='main__title-img' src={magnumTitle} alt='magnum digital studio'/>
                    <p className='main__subtitle'>Диджитал студия производства контента и игр в метавселенных</p>
                </div>
                <div className='main__grid'>
                    <div className='main__grid-item main__grid-item1'></div>
                    <div className='main__grid-item main__grid-item2'></div>
                    <div className='main__grid-item main__grid-item3'></div>
                    <div className='main__grid-item main__grid-item4'></div>
                </div>
            </div>
        </main>
    );
}

export default Main;