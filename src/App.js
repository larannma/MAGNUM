import './App.css';
import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Services from './blocks/Services/Services';
import ContactForm from './blocks/ContactForm/ContactForm';
import Footer from './blocks/Footer/Footer';
import Portfolio from './blocks/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header title={'MAGNUM'}/>
      <Portfolio/>
      <Main/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
