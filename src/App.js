import AboutMe from "./AboutMe";
import React from 'react';
import TodoList from "./TodoList";

function App() {

  // const todos = [
  //   {
  //     name: 'Prepare WDCC workshop',
  //     isComplete: true
  //   },
  //   {
  //     name: 'Run WDCC workshop',
  //     isComplete: false
  //   }
  // ]

  const todos = [];


  return (
    <React.Fragment>
      <h1>My app</h1>
      <AboutMe name="Bob" age={21} />
      <TodoList todos={todos} />
    </React.Fragment>
  );
}

export default App;
