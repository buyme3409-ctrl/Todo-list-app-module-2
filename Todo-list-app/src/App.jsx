import { useState } from "react"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
  )
}


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  function addTodo() {
    // todos = []
    // newTodo = 'Add a todo'
    setTodos([...todos, newTodo]);
    // setTodos([...[], 'Add a todo']);
    // setTodos(['Add a todo']);
    // todos = ['Add a todo']
    setNewTodo("");
  }
  // newTodo = "A"
  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        // value = {"A"}
        onChange={(event) => setNewTodo(event.target.value)}
      // onChange={(event) => setNewTodo("A")}
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>Add</Button>
      <TodoList todos={todos} />
    </div>
  );

}


export default App;
