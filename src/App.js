import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Welcome></Welcome>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

function Welcome(){
  return (
    <div>
      <h1>Welcome to React World !</h1>
    </div>
  );
}

export default App;
