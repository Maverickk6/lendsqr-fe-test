import styles from "../styles/Header.module.scss";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.mainContainer}>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <p>Search Input</p>
      </div>
      <div className={styles.div3}>
        <p>avatar</p>
        <p>avatar</p>
        <p>avatar</p>
      </div>
    </header>
  );
};

export default Header;
