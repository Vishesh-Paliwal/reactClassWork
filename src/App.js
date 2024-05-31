import Effect from './Effect/effect'
import logo from './logo.svg';
import './App.css';
import Products from './Product'
import {a,b} from './Product'
// import Type from './TypeWritter'
import Card from './Card';

let {c,d} = {a,b}; 
function App() {
  return (
    <div className="App">
      {/* <Type></Type> */}
      <Card header={"header"} subheader={"subheader"} img={"xyz"} text={"hello"} link={"abc"} linktext={"i am linktext"} position={"right"}/>
      <Effect></Effect>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{d}</h1>
        <h1>{c}</h1>
        <Products title={1}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HEY THERE !!!
        </a>
      </header>
    </div>
  );
}

export default App;
