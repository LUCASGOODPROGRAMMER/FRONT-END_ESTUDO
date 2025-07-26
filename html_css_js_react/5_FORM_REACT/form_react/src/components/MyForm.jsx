import "./MyForm.module.css";

import { useState } from "react";

const MyForm = ({userName, userEmail,userPassword}) => {
  // gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);

  const handleName = (e) => {
    setName(e.target.value)
  };

  const handleEmail = (e) => setEmail(e.target.value);

  console.log(name, email, password);

  // envio de form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password)

    // validação
    // envio
  }

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
            value = {name || "" }
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
            value = {email}
          />
        </label>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Qual sua senha?"
            onChange={(e) => setPassword(e.target.value)}
            value = {password || ""}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default MyForm;
