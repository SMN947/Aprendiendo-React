import logo from './logo.svg';
import './App.css';
import { Effect } from './components/Effect';
import { AjaxRequest } from './components/AjaxRequest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Use Effect</h1>
        <br />
        <AjaxRequest />
        <br />
        <Effect />
      </header>
    </div>
  );
}

export default App;
