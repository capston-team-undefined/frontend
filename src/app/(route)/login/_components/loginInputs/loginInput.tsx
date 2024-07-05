import Image from "next/image";
import styles from "./loginInput.module.css";
import { Dispatch, SetStateAction } from "react";

export default function LoginInput(props: { setId: Dispatch<SetStateAction<string>>, setPw: Dispatch<SetStateAction<string>>, setAutoLogin: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => { props.setId(e.target.value) }}
          className={styles.loginInput}
        />
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/img/loginImg/user.png" 
            alt="user icon"
            width={20}  
            height={20}  
            className={styles.icon}
          />
        </div>
      </div>

      <div className={`${styles.inputWrapper} ${styles.loginMargin}`}>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => { props.setPw(e.target.value) }}
          className={`${styles.loginInput} ${styles.loginMargin}`}
        />
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/img/loginImg/password.png"  
            alt="pw icon"
            width={20}  
            height={20} 
            className={styles.icons}
          />
        </div>
      </div>
    </>
  );
}
