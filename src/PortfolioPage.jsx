import Header from './blocks/Header/Header';
import Portfolio from './blocks/Portfolio/Portfolio'
import Services from './blocks/Services/Services';
import ContactForm from './blocks/ContactForm/ContactForm';
import Footer from './blocks/Footer/Footer';

function MainPage() {
  return (
    <div className="main-page">
      <Header title={'MAGNUM'}/>
      <Portfolio/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default MainPage;
