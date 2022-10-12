import { db } from "../db/db";

export async function fetchUsers () {
  const response = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );
  const stuffs = await response.json();
  db.transaction("rw", db.fetchedusers, () => {
    db.fetchedusers.bulkAdd(stuffs);
  }).catch((err) => console.log(err));
  return stuffs;
};

export const fetchUser = async (id: number) => {
  const response = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:" + id
  );
  const user = await response.json();
  db.transaction("rw", db.fetcheduser, () => {
    db.fetcheduser.add(user);
  }).catch((err) => console.log(err));
  return user;
};
