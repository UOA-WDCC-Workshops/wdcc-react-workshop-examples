import AboutMe from "./AboutMe";
import React from 'react';
import TodoList from "./TodoList";
import { Route, Routes } from "react-router-dom";
import Page from "./Page";

function App() {

  return (
    <Routes>
      {/* Always render Page */}
      <Route path="/" element={<Page />}>

        {/* If we browse to /about, render AboutMe inside of Page */}
        <Route path="about"
          element={<AboutMe name="Bob" age={21} />} />

        <Route path="todos"
          element={<TodoList />} />

      </Route>
    </Routes>
  );
}

export default App;
