
import SideBar from "../../components/Sidebar/SideBar";
import styles from "./UsersPage.module.scss";
import Header from "../../components/Header/Header";
import UsersComponent from "../../components/UsersComponent/UsersComponent";
import TableDetails from "../../components/table/Table";



const UsersPage = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />

      <div className={styles.body}>
        {/* <div className={styles.sidebar}> */}
        <SideBar />
        {/* </div> */}
        <div className={styles.inner}>
          <UsersComponent />
          <TableDetails />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
