import Logo from "../../assets/logo.svg";
import HomeImg from "../../assets/home-image.svg";
import styles from "./HomePage.module.scss";
import UsersPage from "../userspage/UsersPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const Homepage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      setIsPending(true);
      setTimeout(() => {
        navigate("/users");
      }, 2000);
      //setIsPending(false)
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }

  };
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
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.inputDiv}>
              <input
                type="password"
                name="password"
                className={styles.input_2}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <a className={styles.forgotPassword}>FORGOT PASSWORD?</a>
          </div>

          {/* <input
            className={styles.submit}
            type="submit"
            value="LOG IN"
            onClick={submit}
          /> */}
          {isPending ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#39cdcc"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ margin: "Auto" }}
              visible={true}
            />
          ) : (
            <input
              className={styles.submit}
              type="button"
              value="LOG IN"
              onClick={submit}
            />
          )}
          {error && (
            <span className="text-red-400 m-auto">
              Enter your email and password.
            </span>
          )}
        </form>
      </div>
      {/* <UsersPage /> */}
    </div>
  );
};

export default Homepage;
