import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css'; 

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
  return data;
};

const Todos = () => {
  const { data, isLoading, error } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return (
      <div className="message-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message-container">
        <p className="error-text">An error occurred: {(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="todos-container">
      <ul className="todo-list">
        {data?.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input 
              type="checkbox" 
              checked={todo.completed} 
              readOnly 
              className="todo-checkbox" 
            />
            <span 
              className={`todo-title ${todo.completed ? 'completed' : ''}`}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;