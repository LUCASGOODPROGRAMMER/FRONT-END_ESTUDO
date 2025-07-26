import "./MyForm.module.css";

import { useState } from "react";

const MyForm = ({ userName, userEmail, userPassword }) => {
  // gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => setEmail(e.target.value);

  // envio de form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, bio,role);

    // validação
    // envio

    // limpar form
    setName("");
    setEmail("");
    setPassword("");
    setBio("");
    setRole("")
  };

  return (
    <>
      {/** criando form */}
      {/** envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Qual seu nome?"
            onChange={handleName}
            // controlled input
            value={name || ""}
          />
        </div>
        {/** label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Qual o seu E-mail"
            onChange={handleEmail}
            value={email}
          />
        </label>
        {/** password */}
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Qual sua senha?"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </div>
        {/** text area */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição da Bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          <span>Função do sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
            <option value="edit">edit</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
        {/** select */}
      </form>
    </>
  );
};

export default MyForm;
