import { useState, useEffect } from "react";
import { fetchUsers } from "../../utils/api";
import { db, FetchedUsers } from "../../db/db";
import { useLiveQuery } from "dexie-react-hooks";
import SideBar from "../../components/Sidebar/SideBar";
import styles from "./UsersPage.module.scss";
import Header from "../../components/Header/Header";
import Table from "../../components/table/Table";
import UsersComponent from "../../components/UsersComponent/UsersComponent";
import TableDetails from "../../components/table/Table";

db.fetchedusers.toArray();

const { fetchedusers } = db;

const UsersPage = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    const stuffs = await response.json();
    setData(stuffs);
    db.transaction("rw", db.fetchedusers, () => {
      db.fetchedusers.bulkAdd(data);
    }).catch((err) => console.log(err));
  };

  const allusers = useLiveQuery(() => fetchedusers.toArray(), []);

  return (
    <div className={styles.mainContainer}>
      <Header />

      <div className={styles.body}>
        {/* <div className={styles.sidebar}> */}
          <SideBar />
        {/* </div> */}
        <div>
          <UsersComponent />
          <TableDetails users={allusers} />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
