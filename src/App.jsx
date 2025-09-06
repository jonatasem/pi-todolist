import ThemeToggle from "./components/Themes";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";


function App() {
  return (
    <>
       <ThemeProvider>
          <TodoProvider>
            <div className="app-container">
              <ThemeToggle />
              <h1>Minha Lista de Tarefas</h1>
              <TodoList />
            </div>
        </TodoProvider>
       </ThemeProvider>
    </>
  );
}

export default App;
