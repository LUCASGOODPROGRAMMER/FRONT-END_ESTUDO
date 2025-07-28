import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products"; //url da api rodando no json-server

import "./App.css";

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);

  // 4 - custom hook

  const { data: items, httpConfig, loading, error } = useFetch(url);

  /*useEffect(() => {
    async function getData() {
      const res = await fetch(url); // fetch é um recurso async para chamadas async.
      // await usado para esperar a resolução de uma promisse antes de continuar a execução da função

      const data = await res.json();

      setProducts(data);
    }

    getData();
  }, []);*/

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // 5 - refatorando post
    httpConfig(product, "POST");

    /*

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - carregamento dinamico
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])*/
  };

  return (
    <>
      <div>
        {/** 6 - loading */}
        {loading && (
          <div className="loading">
            <span className="dot dot1">.</span>
            <span className="dot dot2">.</span>
            <span className="dot dot3">.</span>
          </div>
        )}
        {/** 7 - tratamento de erro */}
        {error && <p>{error}</p>}
        {/** 1 - resgate de dados */}
        <ul className="product-list">
          {items &&
            items.map((product) => (
              <li key={product.id} className="product-item">
                <span className="product-name">{product.name}</span>
                <span className="product-price">R$ {product.price}</span>
              </li>
            ))}
        </ul>

        <div className="add-product">
          <form className="form-container" onSubmit={handleSubmit}>
            <label>
              <span>nome</span>
              <input
                type="text"
                name="name"
                placeholder="nome do produto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>preço</span>
              <input
                type="text"
                name="price"
                placeholder="preço do produto"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/** loading post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="cadastrar" />}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
