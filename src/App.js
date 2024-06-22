import "./App.css"

import routes from "./routes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route) => {
            const Page = route.Component
            return <Route key={route.path} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
