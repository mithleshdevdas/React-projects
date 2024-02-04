// @ts-nocheck

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './blog/store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './blog/pages/Home.jsx'
import { AuthLayout, Login } from './blog/components/index.js'
import AllPost from './blog/pages/AllPosts.jsx'
import AddPost from './blog/pages/AddPost.jsx'
import EditPost from './blog/pages/EditPost.jsx'
import Post from './blog/pages/Post.jsx'

import SignUp from './blog/pages/Signup.jsx'



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
