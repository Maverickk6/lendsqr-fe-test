import styles from "./Header.module.scss";
import { assets } from "../../constants";

const Header = () => {
  return (
    <header className={styles.mainContainer}>
      <div>
        <img src={assets.Logo} alt="logo" />
      </div>
      <div className={styles.inputDiv}>
        <input type="text" placeholder="Search For Anything" />
        <div className={styles.inputContainer}>
          <img src={assets.Search} />
        </div>
      </div>
      <div className={styles.div3}>
        <a>Docs</a>
        <img src={assets.Bell} />
        <div className={styles.profileName}>
          <img src={assets.UserImg} />
          <div className={styles.dropdown}>
            <p>Adedeji</p>
            <img src={assets.Dropdown} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
