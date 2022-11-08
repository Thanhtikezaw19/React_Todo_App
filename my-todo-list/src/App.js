// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from "./components/data.json";
import ToDoList from "./components/ToDoList";

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
