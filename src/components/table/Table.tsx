import styles from "./Table.module.scss";
import { FetchedUsers } from "../../db/db";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface UsersProp {
  users: FetchedUsers[] | undefined;
}

interface Tables {
  name: string;
  color: string;
  capacity: string;
  fuel: string;
  price: string;
}

function createData({ name, color, capacity, fuel, price }: Tables) {
  return { name, color, capacity, fuel, price };
}

const rows = [
  createData({
    name: "TATA HARRIER",
    color: "BLACK",
    capacity: "6",
    fuel: "DIESEL",
    price: "14 LACS",
  }),
];

const TableDetails = (users: UsersProp) => {
  console.log(users);
  return (
    <div className={styles.table}>
      Table
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ORGANIZATION</TableCell>
              <TableCell align="center">USERNAME</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">PHONE NUMBER</TableCell>
              <TableCell align="center">DATE JOINED</TableCell>
              <TableCell align="center">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.color}</TableCell>
                <TableCell align="center">{row.capacity}</TableCell>
                <TableCell align="center">{row.fuel}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDetails;
