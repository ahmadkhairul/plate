import React, { useState } from "react";
import { Form } from "react-bootstrap";

const App = () => {
  // const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  return (
    <Form>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" />
      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default App;
