import "./MyForm.module.css";

import { useState } from "react";

const MyForm = () => {
  // gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  console.log(name)
  console.log(email)

  return (
    <>
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
          <input type="text" name="email" placeholder="Qual o seu E-mail" onChange={handleEmail}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default MyForm;
