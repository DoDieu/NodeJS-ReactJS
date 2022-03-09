import logo from './logo.svg';
import './App.css';
import Hello from './components/HelloWorld';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Hello></Hello>
          <Welcome country="VietNam"></Welcome>
          <Welcome country="Japan"></Welcome>
          <Welcome country="Korea"></Welcome>
        </div>
      </header>
    </div>
  );
}

export default App;
