'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Inputs from "./_components/Inputs/Inputs";
import LoginButton from "./_components/loginButton/loginButton";
import Link from "next/link";
import loginApi from "@/app/_service/auth";
export default function Home() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 정규식
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [acountNum, setAcountNum] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [emailOn, setEmailOn] = useState(false);
  const onSubmit = async () => {
};
useEffect(()=>{
  console.log("작성중")
  if(emailRegex.test(email)){
    setEmailOn(true);
  }else{
    setEmailOn(false);
  }
},[email])
  return (
    <main>
        <div className={styles.loginContainer}>

          <h1 className={styles.loginTitle}>
            <label className={styles.loginTitleColor1}>Min</label>
            <label className={styles.loginTitleColor2}>clod</label>
          </h1>

          <div className={styles.loginDep}>
          Lorem ipsum dolor sit amet consectetur. Pharetra.
          </div>

          <div className={styles.loginFormContainer}>
            <Inputs setName={setName} setBirth={setBirth} setEmail={setEmail} setAcountNum={setAcountNum} setId={setId} setPassword={setPassword} setRePassword={setRePassword} emailOn={emailOn}/>
            <LoginButton onSubmit={onSubmit}/>
            <div className={styles.findIDContainer}>
            </div>
          </div>
        </div>
    </main>
  );
}
