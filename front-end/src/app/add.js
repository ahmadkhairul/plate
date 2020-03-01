import React, { useState } from "react";
import { Table } from "react-bootstrap";

const App = () => {
  const [ids, setIds] = useState([
    { name: "Ahmad", addres: "Bandung" },
    { name: "Ahmad", addres: "Tangerang" },
    { name: "Ahmad", addres: "Banten" }
  ]);

  // const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Addres</th>
        </tr>
      </thead>
      <tbody>
        {ids.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.addres}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default App;
