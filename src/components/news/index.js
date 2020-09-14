import React from "react";

import styles from "./styles.module.css";

import useNews from "./useNews";

import { LoaderWrapper } from "components/common";

// use custom hook(useNews) for saving all logic in the component

const News = () => {
  const { news, loading } = useNews();
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <LoaderWrapper />
      ) : (
        <>
          <h1 className={styles.title}>News</h1>
          {news.map(({ title }, i) => (
            <div key={`${title}-${i}}`}>
              {i + 1}. {title}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default News;
