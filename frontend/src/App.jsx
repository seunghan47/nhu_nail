import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Root from "./pages/Root";
import Home from "./pages/Home";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/appointment", element: <Appointment /> },
      { path: "/About", element: <Aboutme /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
