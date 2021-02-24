import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Person></Person>
        <Person></Person>   
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border:'2px solid red',
    margin:'10px' 
  }
  return (
    <div style={personStyle}>
      <h1>Name: Sheikh Md. Tuhin</h1>
      <h3>A react Developer!</h3>
    </div>
  )
}

export default App;
