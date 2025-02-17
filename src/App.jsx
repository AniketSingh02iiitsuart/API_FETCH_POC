import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Changed path to include pages directory
import PostsPage from "./pages/PostsPage";  // Changed path to include pages directory

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts", element: <PostsPage /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;