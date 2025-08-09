import { useState, useReducer } from 'react';

const numberReducer = (state, action) => {
  return Math.round(Math.random() * 10);
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Math.random(), text: action.payload }];
    case "DELETE":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

const HookUseReducer = () => {
  const [number, dispatch] = useReducer(numberReducer, 0);

  const initialTasks = [
    { id: 1, text: "comer banana" },
    { id: 2, text: "comer morango" },
  ];

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    dispatchTasks({ type: "ADD", payload: taskText });
    setTaskText("");
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>número: {number}</p>
      <button onClick={() => dispatch()}>Alterar número</button>

      <h3>tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="enviar" />
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatchTasks({ type: "DELETE", payload: task.id })}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default HookUseReducer;
