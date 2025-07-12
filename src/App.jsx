import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import RootLayout from "./Components/root/RootLayout";
import Home from "./Components/pages/Home";
import Details from "./Components/pages/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
