import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {

  const [newName, setNewName] = useState("");
  const [newUrgency, setNewUrgency] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const [modifiedName, setModifiedName] = useState("");
  const [modifiedUrgency, setModifiedUrgency] = useState(0);
  const [modifiedDone, setModifiedDone] = useState(false);
  const [modifedTodoID, setModifiedTodoID] = useState(0);

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Bath the dog',
      urgency: 3,
      done: false
    },
    {
      id: 2,
      name: 'Buy Grocery',
      urgency: 3,
      done: false
    },
    {
      id: 3,
      name: 'Clean the toilet',
      urgency: 5,
      done: false
    }
  ])

  const addNewTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000 + 1),
      name: newName,
      urgency: newUrgency,
      done: false
    }

    // PATTERN FOR MODIFYING AN ARRAY
    // // 1. create a clone
    // const clone = todos.slice();

    // // 2. modify the clone
    // clone.push(newTodo);

    // // 3. replace the original array with the clone
    // setTodos(clone);

    const clone = [...todos, newTodo];
    setTodos(clone);


  }

  const editTodo = (todoToEdit) => {
    setIsEditing(true);
    setModifiedName(todoToEdit.name);
    setModifiedUrgency(todoToEdit.urgency);
    setModifiedDone(todoToEdit.done);
    setModifiedTodoID(todoToEdit.id)
  }

  const processEditTask = () => {
    const modifiedTodo = {
      id: modifedTodoID,
      name: modifiedName,
      urgency: modifiedUrgency,
      done: modifiedDone
    }

    const clone = todos.map((todo) => {
      if (todo.id != modifedTodoID) {
        return todo;
      } else {
        return modifiedTodo;
      }
    });

    setTodos(clone);
    setIsEditing(false);
  }

  const deleteTodo = (todoID) => {


    // USING SLICE

    // get the index from the ID
    const indexToDelete = todos.findIndex((t) => {
      return t.id === todoID;
    });

    // const lhs = todos.slice(0, indexToDelete); // index 0 to indexToDelete - 1
    // const rhs = todos.slice(indexToDelete + 1); // slice indexToDelete + 1 till all the way to the end of the array
    // const clone = [...lhs, ...rhs];
    // setTodos(clone);

    // const clone = [...todos.slice(0, indexToDelete), ...todos.slice(indexToDelete+1)];


    const clone = todos.filter((todo) => {
      return todo.id != todoID;
    })
    setTodos(clone);
  }

  return (<>
    <div className="container">
      <h1>ToDo List</h1>

      <h2>Add New Todo</h2>
      <div className="container mt-3 mb-3">
        <div>
          <label>Name:</label>
          <input type="text"
            className="form-control"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Urgency:</label>
          <input type="text"
            className="form-control"
            value={newUrgency}
            onChange={(e) => {
              setNewUrgency(e.target.value);
            }}

          />
        </div>
        <button className="btn btn-primary mt-3" onClick={() => {
          addNewTodo();
        }}>Add</button>
      </div>

      {
        isEditing && (
          <div style={{
            position: "absolute",
            height: "500px",
            width: "500px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "10px",
            zIndex: "10",
            padding: "10px"
          }}>
            <h2>Edit To Do</h2>
            <button onClick={() => setIsEditing(false)}>Close</button>

            <div className="container mt-3 mb-3">
              <div>
                <label>Name:</label>
                <input type="text"
                  className="form-control"
                  value={modifiedName}
                  onChange={(e) => {
                    setModifiedName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Urgency:</label>
                <input type="text"
                  className="form-control"
                  value={modifiedUrgency}
                  onChange={(e) => {
                    setModifiedUrgency(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>
                  Done
                </label>
                <input type="checkbox" value={modifiedDone}  className="form-check" onChange={(e)=>{
                    setModifiedDone(!modifiedDone)
                }}/>
              </div>
              <button className="btn btn-primary mt-3" onClick={() => {
                 processEditTask();
              }}>Update</button>
            </div>

          </div>
        )
      }



      <ul className="list-group">
        {
          todos.map(todo => (<li key={todo.id} className="list-group list-group-item">
            <h2>{todo.name}</h2>
            <ul>
              <li>Urgency: {todo.urgency}</li>
              <li>Done: <input type="checkbox" checked={todo.done}/></li>

              {/* Edit Button */}
              <button className="btn btn-primary btn-sm me-2"
                onClick={() => {
                  editTodo(todo);
                }}
              >Edit</button>

              {/* Delete Button */}
              <button className="btn btn-danger btn-sm"
                onClick={() => {
                  deleteTodo(todo.id)
                }}

              >Delete</button>
            </ul>
          </li>))
        }
      </ul>
    </div>
  </>)
}