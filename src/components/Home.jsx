import { GetRecentArticles } from "../utils/api";
import { useState, useEffect } from "react";

import RecentArticles from "./RecentArticles";

function Home() {
  const [currArticles, setCurrArticles] = useState([]);

  const [isLoading, setIsLoading] = useState([]);
  const order = "DESC";
  useEffect(() => {
    setIsLoading(true);
    GetRecentArticles(order).then((data) => {
      setCurrArticles(data);
      setIsLoading(false);
    });
  }, [order]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <main className="articles_list">
        {currArticles.slice(0, 6).map((article, index) => {
          return (
            <RecentArticles
              key={index}
              article_id={article.article_id}
              title={article.title}
              imageUrl={article.imageUrl}
              author={article.author}
              votes={article.votes}
              created_at={article.created_at}
              comments={article.comments}
            />
          );
        })}
      </main>
    </>
  );
}
export default Home;
