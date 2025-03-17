import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout.jsx"
import Home from '../Pages/Home.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
