import logo from './logo.svg';
import './App.css';
import MiComponente from "./MiComponente"
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { Eventos } from './Eventos';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
        <Eventos />
        <hr />
        <TercerComponente nombre="Simon" />
        <hr />
        <SegundoComponente />
        <hr />
        <MiComponente />
      </header>

    </div>
  );
}

export default App;
