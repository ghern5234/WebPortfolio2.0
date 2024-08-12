import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import { Links } from './utils/globals.jsx';

const routes = Links.map((item)=>{
  return {
    path: item.link,
    element: item.element
  }
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index:true,
        element: <Homepage/>,

      },
      ...routes
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);