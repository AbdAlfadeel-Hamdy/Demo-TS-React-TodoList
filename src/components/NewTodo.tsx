import { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (title: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInputRef.current?.value;
    if (enteredText) props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
