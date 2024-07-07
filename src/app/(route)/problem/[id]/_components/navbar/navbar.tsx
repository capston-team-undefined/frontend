'use client'
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation'
import problemData, { probelm } from "@/utils/types/problem";
import { changeProblemTypes } from "@/utils/form";
import { ProblemDatas } from "@/utils/types/problemChk";


export default function Navbar(props:{
     problemData:ProblemDatas[] }){
     const router = useRouter();
    const [userName,setUserName] = useState('김찬민');


    function sumPoints() {
        let totalPoints = 0;
        for (const section of props.problemData) {
            for (const item of section) {
                totalPoints += item.point || 0;
            }
        }
        return totalPoints;
    }
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
                <label
                className={styles.nameProblem}
                >
                    제작자:{userName}
               </label>
           </div>
           <div className={styles.pageContainer}>
                총{Math.ceil(props.problemData.length)}페이지 / {(props.problemData.length - 1) * 3 + props.problemData[props.problemData.length - 1].length}문항 
           </div>
           <div className={styles.btnContainer}>
                    배점 {sumPoints()}점 | 제한시간: 0시간 30분 41초
           </div>
        </div>
    )
}