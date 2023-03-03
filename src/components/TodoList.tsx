import { Todo } from "../todo.model";
import "./TodoList.css";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo: Todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
