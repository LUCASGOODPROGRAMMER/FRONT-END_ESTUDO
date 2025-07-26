import "./MyForm.module.css";

import { useState } from "react";

const MyForm = () => {
  // gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  };

  const handleEmail = (e) => setEmail(e.target.value);

  console.log(name, email, password);

  return (
    <>
    {/** criando form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Qual seu nome?"
            onChange={handleName}
          />
        </div>
        {/** label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Qual o seu E-mail"
            onChange={handleEmail}
          />
        </label>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Qual sua senha?"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default MyForm;
