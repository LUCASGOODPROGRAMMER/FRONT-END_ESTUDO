import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 3 - componente base
import Home from "./routes/Home.jsx";

import Contact from './routes/Contact.jsx';

import ErrorPage from './routes/ErrorPage.jsx';

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: "home", element: <Home /> },
      { path: "contact", element: <Contact /> }
    ]
  }
],
  {
    basename: "/reacthooks/"
  })


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
