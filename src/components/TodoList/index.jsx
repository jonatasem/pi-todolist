import { useState } from "react";
import TodoItem from "../TodoItem";
import { useTodo } from "../../context/TodoContext";

const TodoList = () => {
  const { todos, addTodo } = useTodo();
  const [newTodoText, setNewTodoText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div className="todo-list-container">
      <form onSubmit={handleAdd} className="add-todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
