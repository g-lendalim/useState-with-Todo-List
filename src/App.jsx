import { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList({todos, deleteTodo}){
  console.log(todos);
  return(
    <div className="mt-3">
      <ul>
        {todos.map((todo, index)=> (
          <div key={index} className="d-flex align-items-center justify-content-between p-2 rounded shadow-sm bg-white text-dark">
            <li className="me-3 flex-grow-1">{todo}</li>
            <Button variant="danger" size="sm" onClick={() => deleteTodo(index)}>Delete</Button>
         </div>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  
  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index)); 
  }


  function themeSwitcher() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <div className={`min-vh-100 d-flex flex-column align-items-center justify-content-center p-4 ${darkTheme ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container p-4 rounded shadow-lg" style={{ backgroundColor: darkTheme ? "#333" : "#fff" }}>
        <h3 className="text-center mb-4">{darkTheme ? "🌙 Todo List" : "☀️ Todo List"}</h3>
        <div className="row">
          <div className="col-11">
            <Form.Control
              type="text"
              placeholder="Enter a task..."
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
            />
          </div>
          <Button variant="primary" className="col-1 text-center" onClick={addTodo}>Add</Button>
        </div>
        <TodoList todos={todos}  deleteTodo={deleteTodo} />
        <Form.Check 
          type="switch" 
          id="theme-switch" 
          label={`Switch to ${darkTheme ? "Light" : "Dark"} Mode`}
          checked={darkTheme} 
          onChange={themeSwitcher} 
        />
      </div>
    </div>
  );
}

export default App;