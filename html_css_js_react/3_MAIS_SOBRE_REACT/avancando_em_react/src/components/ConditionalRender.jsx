import React from "react";

function ConditionalRender() {
  const x = true;

  return (
    <div>
      {/** render condicional */}
      <h3>isso será exibido?</h3>

      {x && <p>Se x for true sim</p>}

      {/**render ternário */}
      {x ? <p>x é verdadeiro</p> : <p>x é falso</p>}
      {!x ? (
        <>
          <p>x é verdadeiro</p>
          <p>logo ele existe</p>
        </>
      ) : (
        <>
          <p>x é falso</p>
          <p>logo ele não existe</p>
        </>
      )}
    </div>
  );
}

export default ConditionalRender;
