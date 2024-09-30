import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles["navbar"]}>
        <div className={styles["logo"]}>
          <Link to="/">
            <h1>EZFIX</h1>
          </Link>
        </div>
        <nav className={styles["nav-links"]}>
          <Link to="/signup-login">Sign Up/Login</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
