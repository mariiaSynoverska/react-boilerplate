import React from "react";

import { useAppContext } from "appProvider";

import PageWrapper from "components/pageWrapper";
import News from "components/news";

import styles from "./styles.module.css";

function Home() {
  const { wallpaper, setWallpaper } = useAppContext();
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        {/* Example for using useAppContext */}
        {wallpaper !== "white" && (
          <button className={styles.button} onClick={() => setWallpaper("white")}>
            Change wallpaper to white
          </button>
        )}
        <News />
      </div>
    </PageWrapper>
  );
}

export default Home;
