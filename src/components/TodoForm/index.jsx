import { useState } from "react";
import { useTodo } from "../../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [importance, setImportance] = useState("baixa");

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const todoDate = new Date(`${date}T${time}`);
    
    if (todoDate < now) {
      alert("A data e o horário devem ser futuros.");
      return;
    }
    
    if (!text.trim()) return;
    addTodo(text, date, time, location, importance);
    setText("");
    setDate("");
    setTime("");
    setLocation("");
    setImportance("baixa");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Nome da Tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Local"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
      >
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;