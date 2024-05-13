import { useState } from "react";
import styles from "./mainTop.module.css";
import Link from "next/link";
import Image from "next/image";
  
export default function MainTop(){
 
    return(
        <div className={styles.main}>
            <div className={styles.mainMargin}/>    
            <div className={styles.mainContainer}>
                <div className={styles.mainItem}>
                    <Image 
                    src="/assets/img/QuizPartyBig.svg"
                    alt="logo"
                    width={429}
                    height={102}
                    /><br/>
                    <label className={styles.mainTitle}>나만의 문제를 만들고, 다른 이용자들과 함께 풀며 성장하세요.</label>
                    <div className={styles.problemBtn}>
                        <button className={styles.btnItem}>
                            문제풀기 {'  >'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}