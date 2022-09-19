import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer = { name: "Shaan", job: "Singer" };
const setStyle = {
  color: "red",
  backgroundColor: "white",
};

function App() {
  return (
    <div className="App">
      <Person name="Rubel" />
      <Friend name="Bappa" />
      <Person name="Kopila" />
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

function Friend(props) {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

export default App;
