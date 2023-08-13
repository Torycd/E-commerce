import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Auth from "./components/SignUpPage/Auth";
// import LoginCover from "./components/LoginPage/LoginCover";
// import Auth from "./components/SignUpPage/Auth";
import HomePage from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Auth/>},
    { path: '/home', element: <HomePage/>}
  ]);
  return <RouterProvider router={router} />;
}
export default App;
