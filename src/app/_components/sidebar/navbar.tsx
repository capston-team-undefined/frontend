import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
  
export default function Navbar(){
 
    return(
        <div className={styles.main}>
            <div className={styles.navbarContainer1}>
                <Link href={'#'}>
                    <Image 
                    src="/assets/img/QuizParty.svg"
                    alt="logo"
                    width={120}
                    height={32}
                    />
                </Link>
                <Link href={'#'} className={`${styles.navbarItem} ${styles.navItemColor}`}>
                    문제집 목록
                </Link>
                <Link href={'#'} className={styles.navbarItem}>
                    문제 제작
                </Link>
                <Link href={'#'} className={styles.navbarItem}>
                    마이페이지
                </Link> 
            </div>

            <div className={styles.navbarContainer2}>
                <button className={styles.loginBtn}>로그인</button>
            </div>
        </div>
    )
}