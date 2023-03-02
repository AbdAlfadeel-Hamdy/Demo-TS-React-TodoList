import { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (title: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInputRef.current?.value;
    if (enteredText) props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
