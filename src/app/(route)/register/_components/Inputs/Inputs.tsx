import Image from "next/image";
import styles from "./loginInput.module.css";
import { Dispatch, SetStateAction, useState } from "react";

export default function Inputs(props: {
  setName:Dispatch<SetStateAction<string>>,
  setBirth:Dispatch<SetStateAction<string>>,
  setEmail:Dispatch<SetStateAction<string>>,
  setAcountNum:Dispatch<SetStateAction<string>>,
  setId:Dispatch<SetStateAction<string>>,
  setPassword:Dispatch<SetStateAction<string>>,
  setRePassword:Dispatch<SetStateAction<string>>,
  emailOn:boolean
}) {
  const [eyes, setEyes] = useState<boolean>(true);
  const [dates, setDates] = useState(false);
  return (
    <>
        <div className={styles.inputContainer}>
          <input 
          type="text" 
          placeholder="이름"
          onChange={(e)=>{props.setName(e.target.value)}}
          className={styles.loginInput}
          />
          <input 
          type={`${dates ? "date" : "text"}`} 
          placeholder="생년월일"
          onFocus={()=>{setDates(true)}}
          onChange={(e)=>{props.setBirth(e.target.value)}} 
          className={`${styles.loginInput} ${styles.loginMargin} ${styles.dateInput}`}

          />
        </div>

        <div className={styles.inputContainer}>
        <div className={styles.inputImgs}>
          <input 
          type="text" 
          placeholder="이메일"
          onChange={(e)=>{props.setEmail(e.target.value)}}
          className={styles.loginInput}
          />
          {
            props.emailOn ?
            <Image 
            src="/assets/img/email/emailOn.svg"
            alt="emailon"
            width={23}
            height={23}
            className={`${styles.inputImg} ${styles.ImgMarginUp}`}
            />
            :
            <Image 
            src="/assets/img/email/email.svg"
            alt="emailoff"
            width={25}
            height={25}
            className={`${styles.inputImg} ${styles.ImgMarginUp}`}
            />
          }
        </div>
        <div className={styles.inputImgs}>
          <input 
          type="text" 
          placeholder="인증번호"
          onChange={(e)=>{props.setAcountNum(e.target.value)}} 
          className={`${styles.loginInput} ${styles.loginMargin}`}
          />
          <Image 
            src="/assets/img/num.svg"
            alt="emailoff"
            width={25}
            height={25}
            className={`${styles.inputImg} ${styles.ImgMarginUp}`}
            />
        </div>
        </div>
        
        <div className={styles.inputContainer}>
          <input 
          type="text" 
          placeholder="아이디"
          onChange={(e)=>{props.setId(e.target.value)}}
          className={styles.loginInput}
          />
          <div className={styles.inputImgs}>
            <input 
            type={eyes ? "password" : "text"}
            placeholder="비밀번호"
            onChange={(e)=>{props.setPassword(e.target.value)}} 
            className={`${styles.loginInput} ${styles.loginMargin}`}
            />
            {
              eyes ?
              <Image 
              src="/assets/img/eyesIcon/ion_eye-sharp.svg"
              alt="눈"
              width={25}
              height={25}
              className={styles.inputImg}
              style={{
                fill: "#D8D8D8"
              }}
              onClick={()=>{
                setEyes(false);
              }}
              />
              :
              <Image 
              src="/assets/img/eyesIcon/ion_eye-sharpOn.svg"
              alt="눈"
              width={25}
              height={25}
              className={styles.inputImg}
              style={{
                fill: "#D8D8D8"
              }}
              onClick={()=>{
                setEyes(true);
              }}
              />
            }
          </div>
          <input 
          type="text" 
          placeholder="비밀번호 확인"
          onChange={(e)=>{props.setRePassword(e.target.value)}} 
          className={`${styles.loginInput} ${styles.loginMargin}`}
          />
        </div>
    </>
  );
}
