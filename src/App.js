import './App.css';
import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Services from './blocks/Services/Services';

function App() {
  return (
    <div className="App">
      <Header title={'MAGNUM'}/>
      <Main/>
      <Services/>
    </div>
  );
}

export default App;
