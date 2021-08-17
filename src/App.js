import './App.css';
import React from 'react';
import Todo from './components/todo-card/Todo';


function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <section>
        <Todo></Todo>
      </section>
    </div>
  );
}

export default App;
