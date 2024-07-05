'use client'
import styles from "./page.module.css";
import { useState } from "react";
import LoginInput from "./_components/loginInputs/loginInput";
import LoginButton from "./_components/loginButton/loginButton";
import EasyLogin from "./_components/easyLogin/easyLogin";
import Link from "next/link";
import loginApi from "@/app/_service/auth";

export default function Home() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);

  const onSubmit = async () => {
    await loginApi(id, pw, autoLogin);
  };

  return (
    <main>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>
          <label className={styles.loginTitleColor1}>로그인</label>
        </h1>
        <div className={styles.loginFormContainer}>
          <LoginInput setId={setId} setPw={setPw} setAutoLogin={setAutoLogin} />
          <LoginButton onSubmit={onSubmit} />
          <div className={styles.findIDContainer}>
            <Link href={"#"} className={styles.findID}>
              회원가입 | 아이디 찾기 | 비밀번호 찾기
            </Link>
          </div>
          <EasyLogin />
          </div>

      </div>
    </main>
  );
}
