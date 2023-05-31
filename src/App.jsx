import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/articles" element={<ArticlesList />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
