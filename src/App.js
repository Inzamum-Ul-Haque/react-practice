import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
      <Counter />
      <ExternalUsers />
      {/* {nayoks.map((nayok) => (
        <Person name={nayok} />
      ))}
      {singers.map((singer) => (
        <Person style={setStyle} name={singer.name} />
      ))} */}
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

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email} />
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
