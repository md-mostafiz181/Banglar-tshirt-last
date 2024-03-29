import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import About from './components/About/About';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("tshirts.json")
      },
      {
        path:"/review",
        element:<Review></Review>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/orderReview",
        element:<OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
