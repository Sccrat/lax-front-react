
import './App.css';
import { React, useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coviddaily")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  
  return (
    <div className="App">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Positivos</th>
          <th>Negativos</th>
          <th>Pendientes</th>
          <th>Muertes</th>
        </tr>
      </thead>
      <tbody>
        
       {data.map((d) => (
        <tr>
          <td>{d.Date}</td>
          <td>{d.Muertes}</td>
          <td>{d.Negativos}</td>
          <td>{d.Pendientes}</td>
          <td>{d.Positivos}</td>
        </tr>
      ))}
        
        
        
        
      </tbody>
    </Table>
    </div>
  );
}

export default App;
