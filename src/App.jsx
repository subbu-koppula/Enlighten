import { useState } from "react";
import Deadlines from "./components/Deadlines";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header ></Header>
      <div>
        {/* <Timetable></Timetable> */}
        <div>
          <Todo></Todo>
          <Deadlines></Deadlines>
        </div>
      </div>
    </>
  );
}

export default App;
