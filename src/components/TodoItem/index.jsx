import { useState } from "react";
import { useTodo } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSaveEdit = () => {
    if (editedText.trim()) {
      editTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li
      className={`todo-item ${todo.status === "concluído" ? "completed" : ""}`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="todo-actions">
        {todo.status !== "concluído" && (
          <button onClick={() => toggleTodo(todo.id)}>Concluir</button>
        )}
        {isEditing ? (
          <button onClick={handleSaveEdit} className="btn-save">
            Salvar
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn-edit">
            Editar
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="btn-delete">
          Excluir
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
