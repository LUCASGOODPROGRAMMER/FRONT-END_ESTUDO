

function ChangeMessage({handleMessage}) {
    const messages = ["hai", "oi","hello","oiii"]

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
      <button onClick={() => handleMessage(messages[3])}>4</button>
    </div>
  )
}

export default ChangeMessage
