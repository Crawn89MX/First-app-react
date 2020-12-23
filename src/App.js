import logo from './Assets/images/logo.svg';
import './Assets/css/App.css';

// Importar componente

import MiComponente from './components/MiComponente';
import Footer from './components/Footer';
import Guardar from './components/Guardar';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Assets/css/App.js</code> and save to reload.
        </p>
      </header>
      <section className="componentes">
        <MiComponente/>
        <Footer/>
      </section>
      <Guardar/>
    </div>
  );
}

export default App;
