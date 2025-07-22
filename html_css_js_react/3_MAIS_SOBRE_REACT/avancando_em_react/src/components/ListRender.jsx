import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Lucas", "Keynner", `Einstein`, "Lucas"]);

  const [users, serUsers] = useState([
    { id: 1, name: "lucas", age: 17 },
    { id: 2, name: "keynner", age: 18 },
    { id: 3, name: "manu", age: 17 }
  ]);
  return (
    <>
      {/**render sem key */}
      <ul>
        {list.map((item, i) => (
          <li /**key={i}*/>{item}</li>
        ))}
      </ul>

      {/**render comm key*/}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
