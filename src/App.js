import logo from './logo.svg';
import './App.css';
import MatchupDisplay from './MatchupDisplay';

function App() {
  console.log('here')
  return (
    <div className="App">
      <header className="App-header">
        <h1>YMSD Fantasy Football Playoffs</h1>
        <MatchupDisplay />
      </header>
    </div>
  );
}

export default App;
