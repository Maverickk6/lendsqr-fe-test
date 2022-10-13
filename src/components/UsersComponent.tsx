import React from "react";
import styles from "../styles/UsersComp.module.scss";
import UsersLoan from "../assets/UsersLoan.svg";
import { assets } from "../constants";

const UsersComponent = () => {
  return (
    <div className={styles.userscard}>
      <p>Users</p>
      <div className={styles.cards}>
        <CardComponent
          imgUrl={assets.np_users}
          text="USERS"
          amount="2,453"
          color="rgb(223, 24, 255, 1)"
          rgbColor="rgba(223, 24, 255, 0.2)"
        />
        <CardComponent
          imgUrl={assets.np_users2}
          text="ACTIVE USERS"
          amount="2,453"
          color="rgba(87, 24, 255, 1)"
          rgbColor="rgba(87, 24, 255, 0.2)"
        />
        <CardComponent
          imgUrl={assets.uloanicon}
          text="USERS WITH LOANS"
          amount="2,453"
          color="rgba(245, 95, 68, 1)"
          rgbColor="rgba(245, 95, 68, 0.2)"
        />
        <CardComponent
          imgUrl={assets.moneyicon}
          text="USERS WITH SAVINGS"
          amount="2,453"
          color="rgba(255, 51, 102, 1)"
          rgbColor="rgba(255, 51, 102, 0.2)"
        />
      </div>
    </div>
  );
};

export default UsersComponent;

export const CardComponent = ({
  imgUrl,
  text,
  amount,
  color,
  rgbColor,
}: UsersCard) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: rgbColor,
          width: "30px",
          height: "30px",
          borderRadius: "50px",
          padding: "4px",
        }}
      >
        <img
          style={{
            padding: "4px",
            color: color,
          }}
          src={imgUrl}
        />
      </div>
      <p style={{ fontSize: "12px" }}>{text}</p>
      <p>{amount}</p>
    </div>
  );
};

interface UsersCard {
  imgUrl: string;
  text: string;
  amount: string;
  color: string;
  rgbColor: string;
}