import { useState } from "react";
import { auth, googleProvider, facebookProvider, signInWithPopup, signInWithEmailAndPassword } from "../firebase";
import styles from "../styles/Login.module.css";

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if the input is a phone number
  const isPhoneNumber = (input) => {
    const phonePattern = /^\+?[0-9]{10,15}$/;
    return phonePattern.test(input);
  };

  // Format phone number into an email format (e.g., "+1234567890" becomes "1234567890@phone.com")
  const formatPhoneNumberToEmail = (phone) => {
    return phone.replace(/[^\d]/g, "") + "@phone.com";
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    let identifier = emailOrPhone;
    
    // If it's a phone number, format it as an email
    if (isPhoneNumber(emailOrPhone)) {
      identifier = formatPhoneNumberToEmail(emailOrPhone);
    }

    handleEmailOrPhoneLogin(identifier);
  };

  // Email or formatted phone number login
  const handleEmailOrPhoneLogin = async (identifier) => {
    try {
      await signInWithEmailAndPassword(auth, identifier, password);
      console.log("Login Success");
    } catch (error) {
      setError("Firebase: Error (auth/invalid-credential).");
      console.error("Login Error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Google Login Success");
    } catch (error) {
      setError("Google login failed.");
      console.error("Google Login Error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log("Facebook Login Success");
    } catch (error) {
      setError("Facebook login failed.");
      console.error("Facebook Login Error:", error);
    }
  };

  return (
    <div className={styles["login-container"]}>
      <h1>EZFIX</h1>
      <div className={styles["login-box"]}>
        <h2>Log In</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className={styles["input-container"]}>
            <input
              type="text"
              placeholder="Email Address or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
          </div>
          <div className={styles["input-container"]}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className={styles["forgot-password"]}>
            Forgot password?
          </a>
          <button className={styles["login-button"]}>Log In</button>
        </form>

        <div className={styles["or-container"]}>
          <span>or</span>
        </div>
        <button className={styles["login-google-button"]} onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <button className={styles["login-facebook-button"]} onClick={handleFacebookLogin}>
          Continue with Facebook
        </button>
        <div className={styles["signup-container"]}>
          <p>Don’t have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
