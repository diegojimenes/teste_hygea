import { RouterProvider } from "react-router-dom"
import routerList from "./routerList"

function Router() {
  return <RouterProvider router={routerList} />
}

export default Router
