import { TodoProvider } from "./context/TodoContext";


function App() {
  return (
    <>
       <TodoProvider>
          <div className="app-container">
            <h1>Minha Lista de Tarefas</h1>
          </div>
       </TodoProvider>
    </>
  );
}

export default App;
