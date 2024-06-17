import HomePage from "../pages/HomePage/HomePage"
import Cart from "../pages/Cart/Cart"
import Details from "../pages/Details/Details"
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword"
import Register from "../pages/Register/Register"
import Pay from "../pages/Pay/Pay"
import Done from "../pages/Done/Done"
import LogIn from "../pages/LogIn/LogIn"
import Admin from "../pages/admin/Admin"
import Users from "../pages/admin/Users"
import categories from "../pages/admin/Categoires"
const routes = [
  { path: "/", Component: HomePage },
  { path: "/cart", Component: Cart },
  { path: "/detail", Component: Details },
  { path: "/forgotpassword", Component: ForgotPassword },
  { path: "/register", Component: Register },
  { path: "/pay", Component: Pay },
  { path: "/done", Component: Done },
  { path: "/logIn", Component: LogIn },
  { path: "/admin", Component: Admin },
  { path: "/admin/users", Component: Users },
  { path: "/admin/categories", Component: categories },
]
export default routes
