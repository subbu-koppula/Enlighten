import { useState } from "react";
import "./App.css";

function Header(){
  return(
    <p>This is a header!</p>
  )
}

function Greeting(props){
  console.log(props.name);
  return(
    <p>Greetings, {props.userName}</p>
  )
}



function App() {
  const [count, setCount] = useState(0);
  let greeting = "hello, adeventurer";
  let userName = "sai";
  return (
    <>
      <Header ></Header>
      <div>
        {/* <Timetable></Timetable> */}
        <div>
          <Greeting name = {userName}></Greeting>
          <p>{greeting}</p>
          {/* <Todo></Todo>
          <Deadlines></Deadlines> */}
        </div>
      </div>
    </>
  );
}

export default App;
