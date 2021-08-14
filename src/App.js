import './App.css';
import ToDoItem from './ToDoItem'
import todosData from './todosData';

function App() {
  const todos = todosData.map(todo => <ToDoItem key={todo.id} todo={todo} />)
  return (
    <div className="todo-list">
      {todos}
    </div>
  );
}

export default App;
