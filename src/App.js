import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Blog, { Blogs } from './Component/Blog/Blog';
import SignUp from './Component/Sign/SignUp';
import CardDitais from './Component/Blog/CardDitais';
import Post from './Component/Post/Post';
import PostDitails from './Component/Post/PostDitails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'sign-up', element: <SignUp></SignUp> },
        {
          path: 'blog',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Blogs></Blogs>
        },
        {
          path: 'blog/:id',
          loader: async ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          ,
          element: <CardDitais></CardDitais>
        },
        {
          path: 'post',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
          , element: <Post></Post>
        },
        {
          path: 'post/:id',
          loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
          , element: <PostDitails></PostDitails>
        }

      ]
    },
    {
      path: '*',
      element: <div>
        <Header></Header>
        <h1 className='text-5xl mt-72 text-red-600'>Could not Find Out : 404</h1>
        <p className='text-xl mt-6'>Please Try Again with write right url</p>
      </div>
    }

  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
