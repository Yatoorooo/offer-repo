import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider

} from "react-router-dom";
import Select from "./Components/Select.jsx";
import Finish from "./Components/Finish.jsx";
const router = createBrowserRouter([{path: "/", element: <App/>},
    {path: "/select", element: <Select/>},
    {path: "/finish", element: <Finish/>}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
