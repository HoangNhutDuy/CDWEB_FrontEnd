import "./App.css"

import routes from "./routes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route) => {
            const Page = route.Component
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            )
          })}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
