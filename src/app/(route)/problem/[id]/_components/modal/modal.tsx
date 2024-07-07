'use client'
import Image from 'next/image'
import styles from './modal.module.css'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import problemData, { ProblemSetting } from '@/utils/types/problem'


export default function Modal(props:{
    modal:boolean, 
    setModal:Dispatch<SetStateAction<boolean>>, 
}){


    return(
        <div className={styles.main}
        style={
            props.modal ?
            {display: 'flex'}
            :
            {display: 'none'}
        }
        >
            <div className={styles.background}/>
            <div className={styles.modalMain}>
                <div className={styles.book}/>
                <div className={styles.mainText}>
                    <div className={styles.quizIcon}>
                        퀴즈 제목
                    </div>
                    <div className={styles.titleContainer}>
                        리눅스 마스터
                    </div>
                    <div className={styles.depContainer}>
                        설명입니다
                    </div>
                    <div className={styles.userContainer}>
                        <div className={styles.subMan}>
                            출제자
                        </div>
                        <div className={styles.userName}>
                            김찬민
                        </div>
                    </div>
                    <div className={styles.startBtnContainer}>
                        <button
                        className={styles.startBtn}
                        onClick={()=>{props.setModal(false)}}
                        >
                            시작하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}