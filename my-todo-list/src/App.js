// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from "./components/data.json";
import ToDoList from "./components/ToDoList";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task }
    });
    this.setState({ toDoList: mapped });
  }
  
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
