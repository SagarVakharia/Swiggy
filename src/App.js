import "./App.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import About from "./components/About";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from './components/Contact';
import Error from './components/Error';
import Menu from "./components/Menu";

const  App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],
      errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter} />
);


export default App;
