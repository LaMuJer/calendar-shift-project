import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Shift from "./pages/Shift";
import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
const Shift = lazy(() => import("./pages/Shift"));
const Home = lazy(() => import("./pages/Home"));

// const Home = () => {
//   return <h1 style={{ color: "white" }}>Hello</h1>;
// };

const About = () => {
  return <h1 style={{ color: "red" }}>About</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <Box> */}
      <NavBar />
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shift/:id" element={<Shift />} />
          {/* <Route path="/shift/:id" element={<About />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Suspense>
      {/* </Box> */}
    </BrowserRouter>
  );
};

export default App;
