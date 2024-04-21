
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ClarusBlog from "./pages/ClarusBlog";
import GithubFollowers from "./pages/GithubFollowers";
import Checkout from "./pages/Checkout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/githubFollowers" element={<GithubFollowers />} />
        <Route path="/clarusBlog" element={<ClarusBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
