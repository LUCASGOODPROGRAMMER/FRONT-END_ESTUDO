import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// 2 - página de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// uma função que cria um roteador basea em histórico do navegador
// entre o array e objeto estou definindo as rotas  da aplicação
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage/> },
  { path: "contact", element: <Contact />, errorElement: <ErrorPage/> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/** RouterProvider Serve para ativar o sistema de rotas na aplicação React com o roteador que foi criado. */}
    <RouterProvider router={router} />
  </StrictMode>
);
