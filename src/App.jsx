import { useState } from "react";
import Deadlines from "./components/Deadlines";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Timetable from "./components/timetable";
import "./App.css";


function App() {
  const deadlines = [
    { id: 1, title: 'MFCS Assignment 3', dueDate: '2024-09-20T23:59:00', course: 'MFCS', priority: 'high' },
    { id: 2, title: 'SE Project Proposal', dueDate: '2023-07-20T15:00:00', course: 'SE', priority: 'medium' },
    { id: 3, title: 'Java Lab Report', dueDate: '2023-07-18T09:00:00', course: 'JAVA', priority: 'low' },
    { id: 4, title: 'DL&CO Quiz', dueDate: '2023-07-22T10:30:00', course: 'DL&CO', priority: 'high' },
  ];
  return (
    <>
      <Header ></Header>
      <div className="max-w-[1000px] place-content-center">
        <Timetable></Timetable>
        <div>
          <Todo></Todo>
          <Deadlines deadlines={deadlines}></Deadlines>
        </div>
      </div>
    </>
  );
}

export default App;
