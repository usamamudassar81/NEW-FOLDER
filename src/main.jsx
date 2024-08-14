import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css';
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import Home from '../public/Pages/Home/Home.jsx';
import About from '../public/Pages/About/About.jsx';
import Contactus from '../public/Pages/Contact Us/Contactus.jsx';
import Resume from '../public/Pages/Resume/Resume.jsx';
import Portfolio from '../public/Pages/Portfolio/Portfolio.jsx';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{path:"/",
  // element:<Home/>},
// {path:"/About",
  element:<About/>
},{
  path:"contactus",
  element:<Contactus/>
},
{
  path:"Resume",
  element:<Resume/>
},
{
  path:"Portfolio",
  element:<Portfolio/>
}]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import About from '../public/Pages/About/About.jsx';
// import Portfolio from './pages/Portfolio/Portfolio.jsx';
// import Blogs from './pages/Blogs/Blogs.jsx';
// import Resume from './pages/Resume/Resume.jsx';
// import About from './pag/About.jsx';
// import Contact from './pages/Contact/Contact.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {
//         path: "/",
//         element: <About/>,
      // },
      // {
      //   path: "/resume",
      //   element: <Resume/>,
      // },
      // {
      //   path: "/portfolio",
      //   element: <Portfolio/>,
      // },
      // {
      //   path: "blogs",
      //   element: <Blogs/>
      // },
      // {
      //   path: "contact",
      //   element: <Contact/>
      // }
//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
