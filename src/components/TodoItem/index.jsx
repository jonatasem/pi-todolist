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

  const importanceClass = `priority-${todo.importance}`;

  return (
    <li className={`todo-item ${todo.status === "concluído" ? "completed" : ""} ${importanceClass}`}>
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
        <div className="todo-details">
          <span>{todo.text}</span>
          <p>Data: {todo.date || "N/A"}</p>
          <p>Horário: {todo.time || "N/A"}</p>
          <p>Local: {todo.location || "N/A"}</p>
          <p>Importância: {todo.importance || "N/A"}</p>
        </div>
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

