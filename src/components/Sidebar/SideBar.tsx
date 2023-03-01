import React from "react";
import styles from "./SideBar.module.scss";
import { assets } from "../../constants";

const SideBar = () => {
  return (
    <div className={styles.mainContainer2}>
      <div className={styles.top}>
        <img src={assets.Briefcase} />
        <div className={styles.topdiv}>
          <p>Switch Organization</p>
          <img src={assets.DownArrow} alt="down-arrow" />
        </div>
      </div>
      <div className={styles.top}>
        <img src={assets.Home} />
        <div className={styles.topdiv}>
          <p>Dashboard</p>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.innerDiv}>
          <p>CUSTOMERS</p>
          <ul>
            <li style={{ display: "flex" }}>
              <img src={assets.UserFriends} /> <a>Users</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Users} /> <a>Guarantors</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Sack} /> <a>Loans</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Decision} /> <a>Decision Models</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Savings} /> <a>Savings</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.LoanRequest} /> <a>Loan Requests</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Whitelist} /> <a>Whitelist</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Karma} /> <a>Karma</a>
            </li>
          </ul>
        </div>
        <div className={styles.innerDiv}>
          <p>BUSINESSES</p>
          <ul>
            <li style={{ display: "flex" }}>
              <img src={assets.Briefcase} /> <a>Organization</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.LoanRequest} /> <a>Loan Products</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.SavingsProd} /> <a>Savings Products</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Fees} /> <a>Fees and Charges</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Transactions} /> <a>Transactions</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Services} /> <a>Services</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.ServiceAcc} /> <a>Service Account</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Settlements} /> <a>Settlements</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Charts} /> <a>Reports</a>
            </li>
          </ul>
        </div>
        <div className={styles.innerDiv}>
          <p>SETTINGS</p>
          <ul>
            <li style={{ display: "flex" }}>
              <img src={assets.Prefs} /> <a>Preferences</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Pricing} /> <a>Fees and Pricing</a>
            </li>
            <li style={{ display: "flex" }}>
              <img src={assets.Audit} /> <a>Audit Logs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
