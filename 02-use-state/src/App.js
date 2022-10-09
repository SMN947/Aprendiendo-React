import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio } from './components/Ejercicio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Estados en React
        </h1>
        <hr />
        <Ejercicio year={new Date().getFullYear()} />
        <hr />
        <MiPrimerEstado />
      </header>
    </div>
  );
}

export default App;
