import { Todo } from "../todo.model";

interface TodoListProps {
  items: { id: string; title: string }[];
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo: Todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
