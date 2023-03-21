import {
  createBrowserRouter
} from "react-router-dom"

import List from "../views/list"

export default createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
])