import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Shift from "./components/Shift"

const App = () => {
  return (
    <BrowserRouter>
      <Box >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shift/:id" element={<Shift />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
