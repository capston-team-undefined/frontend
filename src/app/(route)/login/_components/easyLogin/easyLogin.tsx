import Image from "next/image";
import styles from "./easyLogin.module.css";

export default function EasyLogin() {
  return (
    <div className={styles.EasyLoginContainer}>
      <div className={styles.title}>소셜로그인</div>
      <div className={styles.iconSort}>
        <Image 
          src="/assets/img/loginImg/gogle.png"
          alt="구글"
          width={70}
          height={70}
        />
        <Image 
          src="/assets/img/loginImg/kakao.png"
          alt="카카오"
          width={70}
          height={70}
        />
        <Image 
          src="/assets/img/loginImg/naver_icon.svg"
          alt="네이버"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}
