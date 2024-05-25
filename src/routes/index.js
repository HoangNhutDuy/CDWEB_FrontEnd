import HomePage from "../pages/HomePage/HomePage"
import Cart from "../pages/Cart/Cart"
import Details from "../pages/Details/Details"
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword"
const routes = [
  { path: "/", Component: HomePage },
  { path: "/cart", Component: Cart },
  { path: "/detail", Component: Details },
  { path: "/forgotpassword", Component: ForgotPassword },
]
export default routes
