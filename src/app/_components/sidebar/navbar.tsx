'use client'
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Navbar(){
    const pathname = usePathname();
    console.log(pathname)
    return(
        <div className={styles.main}
        style={
            pathname === '/' ?
            {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                position: "fixed"
            
            }
            :
            {
                backgroundColor: "#FFFFFF",
                position: "absolute",
                borderBottom: '1px solid #000000'
            }
        }
        >
            <div className={styles.navbarContainer1}>
                <Link href={'/'}>
                    <Image 
                    src="/assets/img/QuizParty.svg"
                    alt="logo"
                    width={120}
                    height={32}
                    />
                </Link>
                <Link href={'/problem/list'} className={`${ 
                    
                    pathname === '/problem/list' ?
                    styles.navItemChoice
                    : 
                    pathname === '/' ? 
                    styles.navbarItem : styles.navItemColor
                    }`}>
                    문제집 목록
                </Link>
                <Link href={'#'} className={`${ pathname === '/' ? styles.navbarItem : styles.navItemColor}`}>
                    문제 제작
                </Link>
                <Link href={'#'} className={`${ pathname === '/' ? styles.navbarItem : styles.navItemColor}`}>
                    마이페이지
                </Link> 
            </div>

            <div className={styles.navbarContainer2}>
                <button 
                className={`${ pathname === '/' ? styles.loginBtnRoot : styles.loginBtn}`}
                >로그인</button>
            </div>
        </div>
    )
}