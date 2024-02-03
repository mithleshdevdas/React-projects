// @ts-nocheck

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './blog-project/store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './blog-project/pages/Home.jsx'
import { AuthLayout, Login, SignUp } from './blog-project/componets/index.js'
import AllPost from './blog-project/pages/AllPost.jsx'
import AddPost from './blog-project/pages/AddPost.jsx'
import EditPost from './blog-project/pages/EditPost.jsx'
import Post from './blog-project/pages/Post.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <SignUp/>
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
           <AllPost/>
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
           <AddPost/>
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
         <EditPost/>
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      
      <RouterProvider router={ router }>
        <App/>
</RouterProvider>
    </Provider>
  </React.StrictMode>,
)
