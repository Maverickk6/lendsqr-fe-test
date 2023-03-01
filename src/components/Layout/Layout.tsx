import React from "react";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import styles from "./layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.body}>
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
