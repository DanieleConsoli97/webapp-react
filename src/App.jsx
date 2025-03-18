import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout.jsx"
import Home from '../Pages/Home.jsx'
import Card from '../components/Card.jsx'
import { MoviesProvider } from '../hooks/MoviesContextHooks.jsx'
function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/card" element={<Card />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  )
}
export default App
