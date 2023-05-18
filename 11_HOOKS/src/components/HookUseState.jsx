import { useState } from "react";

const HookUseState = () => {
	let varName = "João";
	const [name, setName] = useState("Caio");

	// 1. useState
	const changeName = () => {
		varName = "João Souza";
		setName("Caio Hayashi");

		console.log(varName);
	};

  // 2. useState e input
  const [age, setAge] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    console.log(age)
  }

	return (
		<div>
      <h2>useState</h2>
			{/* 1. useState */}
			<p>Variável: {varName}</p>
			<p>useState: {name}</p>
			<button onClick={changeName}>mudar</button>

			{/* 2. useState e input */}
			<form onSubmit={handleSubmit}>
				<p>Digite sua idade:</p>
				<input type="number" onChange={(e) => setAge(e.target.value)} />
        <input type="submit" />
			</form>
				{age && <p>Você tem {age} anos!</p>}
        <hr />
		</div>
	);
};

export default HookUseState;
