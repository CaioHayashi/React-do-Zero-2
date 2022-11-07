import "./Register.module.css";

const Register = () => {
	return (
		<div>
			<h2>Cadastre-se para postar</h2>
			<p>Crie seu usuário e compartilhe suas histórias</p>
			<form>
				<label>
					<span>Nome:</span>
					<input
						type="text"
						name="displayName"
						required
						placeholder="Nome do usuário"
					/>
				</label>
				<label>
					<span>E-mail:</span>
					<input
						type="email"
						name="email"
						required
						placeholder="E-mail do usuário"
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type="password"
						name="password"
						required
						placeholder="Insira sua senha"
					/>
				</label>
				<label>
					<span>Confirmaçãoo de senha</span>
					<input
						type="password"
						name="confirmPassword"
						required
						placeholder="Confirme sua senha"
					/>
				</label>
				<button className="btn">Cadastrar</button>
			</form>
		</div>
	);
};

export default Register;
