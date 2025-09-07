import { useEffect } from "react";
import ThemeToggle from "./components/Themes";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="app-container">
          <ThemeToggle />
          <h1>Minha Lista de Tarefas</h1>
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;