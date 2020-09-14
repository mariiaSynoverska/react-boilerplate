import { useState, useEffect } from "react";

import { getNews } from "services";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async function asyncLoadNews() {
      const { data } = await getNews();
      setNews(data.articles);
      setLoading(false);
    })();
  }, []);

  return {
    news,
    loading,
  };
};

export default useNews;
