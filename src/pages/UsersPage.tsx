import { useState, useEffect } from "react";
import { db } from "../db/db";
import { useLiveQuery } from "dexie-react-hooks";

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
    <div style={{ width: "300px", height: "300px", overflow: "scroll" }}>
      {allusers?.map((user) => (
        <div>
          <ul
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            <li>{user.userName}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
