import React from "react";
import Register from "../components/register";
import Login from "../components/login";

const App = () => {
  // const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  return (
    <>
      <Login />
      <Register />
    </>
  );
};

export default App;
