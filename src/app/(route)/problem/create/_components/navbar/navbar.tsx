'use client'
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation'
import { probelm } from "@/utils/types/problem";


export default function Navbar(props:{problemType:probelm[]}){
     const router = useRouter();
    const [userName,setUserName] = useState('김찬민');

    return(
        <div className={styles.main}>
           <div className={styles.outContainer}>
                <Image 
                src="/assets/img/out.svg"
                alt="logo"
                width={40}
                height={40}
                onClick={()=>{router.back()}}
                className={styles.back}
                />
                <label>제작자:{userName}</label>
           </div>
           <div className={styles.pageContainer}>
                총{Math.ceil(props.problemType.length / 3)}페이지 / {props.problemType.length}문항 
           </div>
           <div className={styles.btnContainer}>
                <div className={styles.btnPosition}>
                <button className={styles.btn}>초기화</button>
                <button className={styles.btn}>저장</button>
                </div>
           </div>
        </div>
    )
}