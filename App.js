import React from "react";
import { createRoot } from 'react-dom/client';
import BodyComponent from "./src/components/body";
import HeaderComponent from "./src/components/header";
import ContactComponent from "./src/components/contact";
import ErrorComponent from "./src/components/error";
import CartComponent from "./src/components/cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CardDetailComponent from "./src/components/cardDetail";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./src/components/contact"));
const AppComponent = () => {
  return ( <div className="root-container">
        <HeaderComponent />
        <Outlet/>
    </div>
   );
}
const root = createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <AppComponent />,
        errorElement: <ErrorComponent/>,
        children:[
          {
            path:"/",
            element:<BodyComponent/>
          },
          {
            path:"/contact",
            element:<Contact />
          },
          {
            path:"/cart",
            element:<CartComponent/>
          },
          {
            path:"/carddetail/:cardId",
            element:<Suspense fallback="The app is loading!"> 
            <CardDetailComponent/>
            </Suspense>
          },
        ]
      }
    ])
root.render(<RouterProvider router={appRouter} />);