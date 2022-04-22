import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const Home = lazy(() => import("./../pages/Home"))
const Signup = lazy(() => import("../pages/Signup/Signup"))

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]

export default Routes
