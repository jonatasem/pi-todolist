import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, date, time, location, importance) => {
    const newTodo = {
      id: uuidv4(),
      text,
      date,
      time,
      location,
      importance,
      status: "pendente",
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    if ("Notification" in window && Notification.permission === "granted" && date && time) {
      const todoDate = new Date(`${date}T${time}`);
      const now = new Date();
      const delay = todoDate.getTime() - now.getTime();

      if (delay > 0) {
        setTimeout(() => {
          new Notification("Lembrete de Tarefa!", {
            body: `Sua tarefa "${text}" está agendada para agora. Local: ${location}.`,
          });
        }, delay);
      }
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: "concluído" } : todo,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo deve ser usado dentro de um TodoProvider");
  }
  return context;
};