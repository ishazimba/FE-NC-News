import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import IndividualArticleContainer from "./components/IndividualArticleContainer";
import Comments from "./components/Comments";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/articles" element={<ArticlesList />}></Route>
            <Route
              path="/articles/:article_id"
              element={<IndividualArticleContainer />}
            ></Route>
            <Route
              path="/articles/:article_id/comments"
              element={<Comments />}
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
