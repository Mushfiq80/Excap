import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './Home.jsx';
import Form from './Form.jsx';
import Instruction from './Instruction.jsx';
import Modal from './Modal.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'form',
        element: <Form></Form>
      },
      {
        path:'instruction',
        element:<Instruction></Instruction>
      },
      {
        path:'modal',
        element:<Modal></Modal>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
