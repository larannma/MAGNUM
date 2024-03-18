import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Services from './blocks/Services/Services';
import ContactForm from './blocks/ContactForm/ContactForm';
import Footer from './blocks/Footer/Footer';
import bgImage from './img/background.png'

function MainPage() {
  return (
    <div className="main-page">
      {/* <img src={bgImage} style={{position: 'fixed', zIndex: -100, top: 0, left:0, maxWidth: '1280px'}}/> */}
      <Header title={'MAGNUM'}/>
      <Main/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default MainPage;
