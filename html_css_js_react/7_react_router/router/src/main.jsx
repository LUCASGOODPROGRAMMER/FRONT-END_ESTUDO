import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// 2 - página de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// 3 - componente base
import Home from "./routes/Home.jsx";

// 7 - rota dinâmica
import Product from "./routes/Product.jsx";

// 8 nested route
import Info from "./routes/Info.jsx";

// 9 - search params
import Search from "./routes/Search.jsx";

// uma função que cria um roteador basea em histórico do navegador
// entre o array e objeto estou definindo as rotas  da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      // 7 - rota dinâmica
      { path: "products/:id", element: <Product /> },
      // 8 - nested route
      { path: "products/:id/info", element: <Info /> },
      // 9 - search
      {
        path: "search",
        element: <Search />,
      },
      // 10 - redirect
      {
        path:"teste",
        element: <Navigate to="/"/>
      }
    ],
  },
  /**{ path: "contact", element: <Contact />, errorElement: <ErrorPage/> }, */
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/** RouterProvider Serve para ativar o sistema de rotas na aplicação React com o roteador que foi criado. */}
    <RouterProvider router={router} />
  </StrictMode>
);
