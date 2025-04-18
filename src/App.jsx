import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout.jsx"
import Home from '../Pages/Home.jsx'
import Card from '../components/Card.jsx'
import { MoviesProvider } from '../hooks/MoviesContextHooks.jsx'
import Film from "../Pages/Film.jsx"
import Films from "../Pages/Films.jsx"
function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/film/:id" element={<Film />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  )
}
export default App
