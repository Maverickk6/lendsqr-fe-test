import Logo from "../assets/logo.svg";
import HomeImg from "../assets/home-image.svg";
import styles from "../styles/HomePage.module.scss";
import UsersPage from "./UsersPage";

const Homepage = () => {
  return (
    <div className={styles.mainContainer}>
      {/* left-div */}
      <div className={styles.leftDiv}>
        <img className={styles.img1} src={Logo} alt="main image" />
        <img className={styles.img2} src={HomeImg} alt="home-image" />
      </div>

      {/* right-div */}
      <div className={styles.rightDiv}>
        <div className={styles.rightDivTop}>
          <h1 className={styles.h1}>Welcome!</h1>
          <p className={styles.subFont}>Enter details to log in</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <div className={styles.inputDiv}>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={styles.inputDiv}>
              <input
                type="password"
                className={styles.input_2}
                placeholder="Password"
              />
            </div>
            <a className={styles.forgotPassword}>FORGOT PASSWORD?</a>
          </div>

          <input className={styles.submit} type="submit" value="LOG IN" />
        </form>
      </div>
      {/* <UsersPage /> */}
    </div>
  );
};

export default Homepage;
