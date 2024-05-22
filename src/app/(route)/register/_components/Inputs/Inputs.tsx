import Image from "next/image";
import styles from "./loginInput.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LoginButton from "../loginButton/loginButton";
import FindBar from "../findBar/FindBar";

export default function Inputs() {
  //props: {
  //   setName:Dispatch<SetStateAction<string>>,
  //   setBirth:Dispatch<SetStateAction<string>>,
  //   setEmail:Dispatch<SetStateAction<string>>,
  //   setAcountNum:Dispatch<SetStateAction<string>>,
  //   setId:Dispatch<SetStateAction<string>>,
  //   setPassword:Dispatch<SetStateAction<string>>,
  //   setRePassword:Dispatch<SetStateAction<string>>,
  //   emailOn:boolean,
  //   acountNumOn:boolean,
  //   emailInput:boolean,
  //   idExists:boolean,
  //   id:string,
  //   emailVerification:Function,
  //   tokenVerification:Function,
  //   idExistFuc:Function
  // }
  // const [eyes, setEyes] = useState<boolean>(true);
  // const [reEyes, setReEyes] = useState<boolean>(true);
  // const [dates, setDates] = useState(false);
  // const [id, setId] = useState("");
  // useEffect(() => {
  //   props.setId(id);
  // }, [id]);
  // const ex = async () => {
  //   const isTrue = await props.idExistFuc();
  //   console.log(isTrue);
  //   if (isTrue) {
  //     setId("");
  //   }
  // };
  // useEffect(() => {
  //   ex();
  // }, [props.id]);
  return (
    <>
      <div className={`${styles.input_form_container}`}>
        <form>
          <h1>회원가입</h1>
          <fieldset className={`${styles.input_form}`}>
            <div className={`${styles.img_options}`}>
              <Image
                src={"/assets/img/loginImg/user.png"}
                width={"32"}
                height={"32"}
                alt='img error'
              ></Image>
            </div>
            <input
              placeholder='이름'
              className={`${styles.input_options}`}
            ></input>
          </fieldset>
          <fieldset className={`${styles.input_form}`}>
            <div className={`${styles.img_options}`}>
              <Image
                src={"/assets/img/loginImg/user.png"}
                width={"32"}
                height={"32"}
                alt='img error'
              ></Image>
            </div>
            <input
              placeholder='아이디'
              className={`${styles.input_options}`}
            ></input>
          </fieldset>
          <fieldset className={`${styles.input_form}`}>
            <div className={`${styles.img_options}`}>
              <Image
                src={"/assets/img/loginImg/padlock.png"}
                width={"32"}
                height={"32"}
                alt='img error'
              ></Image>
            </div>
            <input
              placeholder='비밀번호'
              className={`${styles.input_options}`}
            ></input>
            <div className={`${styles.img_options}, ${styles.sub_img_options}`}>
              <Image
                src={"/assets/img/loginImg/hide.png"}
                width={"32"}
                height={"32"}
                alt='img error'
              ></Image>
            </div>
          </fieldset>
          <fieldset className={`${styles.input_form}`}>
            <div className={`${styles.img_options}`}>
              <Image
                src={"/assets/img/loginImg/mail.png"}
                width={"32"}
                height={"32"}
                alt='img error'
              ></Image>
            </div>
            <input
              placeholder='이메일'
              className={`${styles.input_options}`}
            ></input>
            <div className={`${styles.check_mail_form}`}>인증번호 보내기</div>
          </fieldset>
          <fieldset className={`${styles.input_form}`}>
            <div className={`${styles.img_options}`}>
              <Image
                src={"/assets/img/loginImg/mail-check.png"}
                width={"32"}
                height={"32"}
                alt='img error'
              ></Image>
            </div>
            <input
              placeholder='이메일 확인'
              className={`${styles.input_options}`}
            ></input>
            <div className={`${styles.check_mail_form}`}>확인</div>
          </fieldset>
          <LoginButton></LoginButton>
          <FindBar></FindBar>
        </form>
      </div>
    </>
  );
}
