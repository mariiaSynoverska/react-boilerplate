import React from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

import { useAppContext } from "appProvider";

import { Header } from "components/common";

function PageWrapper({ children }) {
  const { wallpaper } = useAppContext();
  return (
    <div className={classNames(styles.wrapper, styles[wallpaper])}>
      <Header />
      <div className={classNames(styles.content)}>{children}</div>
      <div>Footer</div>
    </div>
  );
}

export default PageWrapper;
