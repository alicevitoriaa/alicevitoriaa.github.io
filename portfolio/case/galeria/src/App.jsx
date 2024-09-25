import Galeria from './Galeria';
import Filtros from './Filtros';
import { useState } from 'react';
import './styles/index.css';

function App() {

  let [resultado, setResultado] = useState('');

  return (
    <>
      <header>
        <i className="bi bi-grid-1x2-fill"></i>
        <div>GALERIA DE FOTOS</div>
      </header>
      <Filtros pesquisaRe={setResultado} />
      <Galeria query={resultado} />
    </>
  )
}

export default App