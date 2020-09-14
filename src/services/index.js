import api from "./api";

export const getNews = () => {
  return api.get(
    `everything?q=bitcoin&from=2020-08-14&sortBy=publishedAt&apiKey=67cbdc8140a5432ea1395285157044fc`
  );
};
