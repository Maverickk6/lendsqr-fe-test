import React from "react";
import { Link } from "react-router-dom";
import deleteuser from "../../assets/blaclist.svg";
import activateuser from "../../assets/activate.svg";
import eyeuser from "../../assets/view.svg";

interface Props {
  link: string;
}

const UserCta: React.FC<Props> = ({ link }) => {
  return (
    <div className="flex flex-col gap-2 py-3">
      <Link to={link} className="userCta-btn">
        <img src={eyeuser} alt="eye" />
        <span>View Details</span>
      </Link>
      <button className="userCta-btn">
        <img src={deleteuser} alt="delete" />
        <span>Blacklist User</span>
      </button>
      <button className="userCta-btn">
        <img src={activateuser} alt="activate" />
        <span>Activate User</span>
      </button>
    </div>
  );
};

export default UserCta;
