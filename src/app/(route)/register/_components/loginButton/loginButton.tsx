import Image from "next/image";
import styles from "./loginButton.module.css";
import axios from "axios";
export default function LoginButton() {
  return <button className={styles.loginBtn}>회원가입</button>;
}
