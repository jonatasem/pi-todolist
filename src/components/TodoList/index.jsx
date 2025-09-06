
const TodoList = () => {
  return (
    <div className="todo-list-container">
      <form className="add-todo-form">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-items"></ul>
    </div>
  );
};

export default TodoList;
