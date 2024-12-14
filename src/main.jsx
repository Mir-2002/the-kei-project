import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import WriteMessage from "./WriteMessage.jsx";
import Thanks from "./Thanks.jsx";
import Messages from "./Messages.jsx";
import Message from "./Message.jsx";
import Kei from "./Kei.jsx";

function Layout() {
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="flex w-full h-[90vh] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/message",
        element: <WriteMessage />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/messages/:id",
        element: <Message />,
      },
      {
        path: "/kei",
        element: <Kei />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
