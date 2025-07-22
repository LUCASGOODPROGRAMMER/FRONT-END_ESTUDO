import { useState } from "react";

const Sum = () => {
  const [number, setNumber] = useState(randomNumber);
  const [otherNumber, setOtherNumber] = useState(randomNumber);
  function randomNumber() {
    return Math.ceil(Math.random() * 10);
  }

  return (
    <>
      <p>teste sua sorte:</p>
      <button onClick={() => setNumber(randomNumber)}>
        SORTEAR O PRIMEITO NÚMERO
      </button>
      <button onClick={() => setOtherNumber(randomNumber)}>
        SORTEAR O SEGUNDO NÚMERO
      </button>
      <button
        onClick={() => [setNumber(randomNumber), setOtherNumber(randomNumber)]}
      >
        SORTEAR AMBOS
      </button>
      <p>
        {number} {otherNumber}
      </p>
      {number === otherNumber ?<p>sortudo</p>:<p>os números não são iguais</p>}
    </>
  );
};

export default Sum;
