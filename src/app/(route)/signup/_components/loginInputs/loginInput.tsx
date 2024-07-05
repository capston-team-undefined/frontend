import Image from "next/image";
import styles from "./loginInput.module.css";
import { Dispatch, SetStateAction } from "react";

export default function LoginInput(props: { setId: Dispatch<SetStateAction<string>>, setPw: Dispatch<SetStateAction<string>>, setAutoLogin: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <div className={styles.inputWrapper}>
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/img/loginImg/user.png" 
            alt="user icon"
            width={20}  
            height={20}  
            className={styles.icon}
          />
        </div>
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => { props.setId(e.target.value) }}
          className={styles.loginInput}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.loginMargin}`}>
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/img/loginImg/password.png" 
            alt="pw icon"
            width={20} 
            height={20} 
            className={styles.icon}
          />
        </div>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => { props.setPw(e.target.value) }}
          className={styles.loginInput}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.loginMargin}`}>
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/img/loginImg/email-icon.png" 
            alt="email icon"
            width={20} 
            height={20} 
            className={styles.icon}
          />
        </div>
        <div className={styles.inputWithButtonWrapper}>
          <input
            type="text"
            placeholder="이메일"
             className={styles.loginInputWithButton}
          />
          <button className={styles.actionButton}>인증번호 보내기</button>
        </div>
      </div>

      <div className={`${styles.inputWrapper} ${styles.loginMargin}`}>
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/img/loginImg/okmail.png" 
            alt="verify icon"
            width={20} 
            height={20} 
            className={styles.icon}
          />
        </div>
        <div className={styles.inputWithButtonWrapper}>
          <input
            type="text"
            placeholder="인증번호"
             className={styles.loginInputWithButton}
          />
          <button className={styles.actionButton}>확인</button>
        </div>
      </div>
    </>
  );
}
