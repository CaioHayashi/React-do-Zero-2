import { useReducer, useState } from "react";

const HookUseReducer = () => {
	const [number, dispatch] = useReducer((state) => {
		return Math.ceil(Math.random(state) * 100);
	});

	// Avançando no reducer
	const initialTasks = [
		{ id: 1, text: "Fazer alguma coisa" },
		{ id: 2, text: "Fazer outra coisa" }
	];

	const taskReducer = (state, action) => {
		switch (action.type) {
			case "ADD": {
				const newTask = {
					id: Math.random(),
					text: taskText
				};

				setTaskText("");

				return [...state, newTask];
			}
			case "DELETE":
				return state.filter((task) => task.id !== action.id);

			default:
				return state;
		}
	};

	const [taskText, setTaskText] = useState("");
	const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatchTasks({ type: "ADD" });
	};

	const removeTask = (id) => {
		dispatchTasks({ type: "DELETE", id });
	};

	return (
		<div>
			<h2>useReducer</h2>
			<p>Número: {number}</p>
			<button onClick={dispatch}>Alterar número</button>
			{/* Avançando no reducer */}
			<h3>tarefa:</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setTaskText(e.target.value)} />
				<input type="submit" value="enviar" />
			</form>
			<ul>
				{tasks.map((task) => (
					<li key={task.id} onDoubleClick={() => removeTask(task.id)}>
						{task.text}
					</li>
				))}
			</ul>
			<hr />
		</div>
	);
};

export default HookUseReducer;
