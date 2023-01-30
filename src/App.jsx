import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Shift from "./pages/Shift"
import {Box } from "@mui/material"

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
