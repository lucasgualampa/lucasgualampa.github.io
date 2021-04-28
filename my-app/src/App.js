import logo from './logo.svg';
import './App.css';
var emoji = require('node-emoji')


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Working in a beautiful portfolio, stay tuned {emoji.get(':tv:')}</h3>
      </header>
    </div>
  );
}

export default App;
