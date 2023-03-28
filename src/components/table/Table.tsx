import styles from "./Table.module.scss";
import { db, FetchedUsers } from "../../db/db";
import { useLiveQuery } from "dexie-react-hooks";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Popover from "@mui/material/Popover";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import dayjs from "dayjs";
import UserCta from "../CTA/UsersCta";
import FilterModal from "../modal/FilterModal";

interface Column {
  id: "orgName" | "userName" | "email" | "phoneNumber" | "createdAt" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "orgName", label: "ORGANIZATION", minWidth: 100 },
  { id: "userName", label: "ORGANIZATION", minWidth: 100 },
  { id: "email", label: "EMAIL" },
  { id: "phoneNumber", label: "PHONE NUMBER" },
  { id: "createdAt", label: "DATE JOINED" },
  { id: "status", label: "STATUS" },
];

interface Data {
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  dateJoined: string;
  status: string;
}

function createData(
  organization: string,
  username: string,
  email: string,
  phoneNumber: number,
  dateJoined: string,
  status: string
): Data {
  return { organization, username, email, phoneNumber, dateJoined, status };
}

type DataType = {
  id: number;
  createdAt: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
};

const statuses: string[] = ["Active", "Inactive", "Pending", "Blacklisted"];

db.fetchedusers.toArray();


const TableDetails = () => {
  const [data, setData] = useState<[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    setIsPending(true);
    const response = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    const stuffs = await response.json();
    setData(stuffs);
    db.transaction("rw", db.fetchedusers, () => {
      db.fetchedusers.bulkAdd(data);
    }).catch((err) => console.log(err));
    setIsPending(false);
  };

  const allusers: any = useLiveQuery(() => db.fetchedusers.toArray(), []);
  if(!allusers) return null;
  // console.log(allusers);

  const filterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  // console.log(data);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // console.log(users);
  return (
    <div className={styles.table}>

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          marginTop: "20px",
          color: "#545F7D",
          position: "relative",
          marginBottom: "10px",
        }}
      >
        <TableContainer sx={{ maxHeight: 1000 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    className="text-xs"
                    style={{
                      minWidth: 150,
                      color: "#545F7D",
                      fontSize: "12px",
                    }}
                  >
                    {column.label}
                    <FilterListIcon
                      onClick={filterModal}
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      fontSize="small"
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allusers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={row["phoneNumber"]}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        const status =
                          statuses[Math.floor(Math.random() * statuses.length)];

                        return (
                          <TableCell
                            sx={{ color: "#545F7D", fontSize: "12px" }}
                            key={column.id}
                            align={column.align}
                          >
                            <span
                              className={
                                column.id === "status" ? `${status}` : ""
                              }
                            >
                              {column.id === "createdAt"
                                ? dayjs(value).format("MMM D, YYYY h:mm A")
                                : column.id === "status"
                                ? status
                                : value}
                            </span>
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <PopupState
                          variant="popover"
                          popupId="demo-popup-popover"
                        >
                          {(popupState) => (
                            <div>
                              <MoreVertOutlinedIcon
                                {...bindTrigger(popupState)}
                                sx={{ cursor: "pointer", color: "#545F7D" }}
                                fontSize="small"
                              />
                              <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "center",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "center",
                                }}
                              >
                                <UserCta link={`/users/${row.id}`} />
                              </Popover>
                            </div>
                          )}
                        </PopupState>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allusers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {showFilterModal && <FilterModal />}
      </Paper>
    </div>
  );
};

export default TableDetails;
