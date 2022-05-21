import AboutMe from "./AboutMe";
import React from 'react';
import TodoList from "./TodoList";

function App() {

  return (
    <React.Fragment>
      <h1>My app</h1>
      <AboutMe name="Bob" age={21} />

      {/* Don't need to supply todos anymore - they are obtained from context instead. */}
      <TodoList />
    </React.Fragment>
  );
}

export default App;
