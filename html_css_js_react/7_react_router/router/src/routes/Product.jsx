import { useFetch } from "../hooks/useFetch";

import { useParams } from "react-router-dom"; // usado para poder extrair o id da url

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product } = useFetch(url);
  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <p>ID do produto:{id}</p>
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
