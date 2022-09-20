import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer = { name: "Shaan", job: "Singer" };
const setStyle = {
  color: "red",
  backgroundColor: "white",
};

function App() {
  const nayoks = ["Rubel", "Bappa", "Kuber"];
  const singers = [
    { name: "Rubel", job: "cricketer" },
    { name: "Bappa", job: "actor" },
    { name: "Kuber", job: "actor" },
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <Person name={nayok} />
      ))}
      {singers.map((singer) => (
        <Person style={setStyle} name={singer.name} />
      ))}
      {/* <Person name={nayoks[0]} />
      <Friend name={nayoks[1]} />
      <Person name={nayoks[2]} /> */}
    </div>
  );
}

function Person(props) {
  return (
    <div style={props.style}>
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
