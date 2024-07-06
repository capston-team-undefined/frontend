'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './yesOrNo.module.css'
import problemData, { ProblemYseOrNo } from '@/utils/types/problem'
import Image from 'next/image'

export default function YesOrNo(props:{
    problemData: problemData,
    setProblemData: Dispatch<SetStateAction<problemData | undefined>>,
    num:Number
}) {
    const [problem, setProblem] = useState<ProblemYseOrNo>(
        {
            yes: false,
            no: false
        }
    )


    useEffect(()=>{
        const list = props.problemData;
        if (list && list.data) {
            list.data[Number(props.num)- 1] = problem;
            props.setProblemData(list);
        }
    },[problem])
    
    const handleOnClickYseOrNo = (yesorno:string) => {
        if(yesorno === 'yes'){
            setProblem({
                yes: true,
                no: false
            })
        }else if(yesorno === 'no'){
            setProblem({
                yes: false,
                no: true
            })
        }else{
            setProblem({
                yes: false,
                no: false
            })
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.inforContainer}>
                <div className={styles.infor}>
                    정답클릭
                </div>
            </div>
            <div className={styles.yesOrNoContainer}>
            <div className={`${styles.yesContainer} ${problem.yes ? styles.yesOn : ''}`}
                onClick={()=>{handleOnClickYseOrNo('yes')}}
                >
                    <div className={styles.yes}
                    style={{
                        color: `${problem.yes ? '#FFFFFF' : '#000000'}`
                    }}
                    >o</div>
                </div>
                <div className={`${styles.noContainer} ${problem.no ? styles.noOn : ''}`}
                onClick={()=>{handleOnClickYseOrNo('no')}}
                >
                    <div className={styles.no}
                    style={{
                        color: `${problem.no ? '#FFFFFF' : '#000000'}`
                    }}
                    >x</div>
                </div>
            </div>
        </div>
    )
}
