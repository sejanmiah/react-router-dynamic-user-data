import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Mobiles from './component/Mobiles/Mobiles.jsx';
import Laptops from './component/Laptops/Laptops.jsx';
import Users from './component/Users/Users.jsx';
import Users2 from './component/Users2/Users2.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={ <span>Loading......</span> }>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      }
    ]
  },
  {
    path: 'about',
    element: <div>This is about</div>
  },
  {
    path: 'blogs',
    element: <div>This is blogs page</div>
  },
  {
    path: 'app',
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
