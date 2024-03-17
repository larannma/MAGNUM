import './Services.css'
import circle from '../../img/circle.png'


function Services() {
    return (
      <div className="services">
        <img className='services__circle-decor' alt='circle' src={circle}/>
        <h1 className='services__title'>МЫ СОЗДАЕМ</h1>
        <div className='services__container'>
            <div className='services__item services__item1'><p className='services__item-title'>РЕКЛАМА</p></div>
            <div className='services__item services__item2'><p className='services__item-title'>MOTION</p></div>
            <div className='services__item services__item3'><p className='services__item-title'>AVATAR</p></div>
            <div className='services__item services__item4'><p className='services__item-title'>METAVERSE</p></div>
        </div>
      </div>
    );
  }
  
  export default Services;
  