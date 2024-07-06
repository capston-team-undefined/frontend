'use client'
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation'
import problemData, { probelm } from "@/utils/types/problem";
import { changeProblemTypes } from "@/utils/form";


export default function Navbar(props:{problemType:probelm[], setModal:Dispatch<SetStateAction<boolean>>, problemData:problemData | undefined}){
     const router = useRouter();
    const [userName,setUserName] = useState('김찬민');

    const handleOnSubmit = () =>{
     if(props.problemData)
     console.log(changeProblemTypes(props.problemData));


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
                <Image 
                src="/assets/img/setting.svg"
                alt="logo"
                width={40}
                height={40}
                onClick={()=>{props.setModal(true)}}
                className={styles.back}
                />
           </div>
           <div className={styles.pageContainer}>
                총{Math.ceil(props.problemType.length / 3)}페이지 / {props.problemType.length}문항 
           </div>
           <div className={styles.btnContainer}>
                <div className={styles.btnPosition}>
                <button 
                className={styles.btn}
                onClick={handleOnSubmit}
                >저장</button>
                </div>
           </div>
        </div>
    )
}