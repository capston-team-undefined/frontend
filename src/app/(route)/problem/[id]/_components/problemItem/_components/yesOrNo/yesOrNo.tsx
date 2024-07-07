'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './yesOrNo.module.css'
import problemData, { ProblemYseOrNo } from '@/utils/types/problem'
import Image from 'next/image'
import { ProblemDatas, ProblemTypes } from '@/utils/types/problemChk'

export default function YesOrNo(props:{
    allData: ProblemDatas[],
    problemData: ProblemTypes,
    setProblemData: Dispatch<SetStateAction<ProblemDatas[]>>,
    problemNum:number,
    idx:number
}) {
    const [problem, setProblem] = useState<ProblemYseOrNo>(
        {
            yes: false,
            no: false
        }
    )


    useEffect(()=>{
        const list = props.allData;
        if (list && problem) {
            list[props.problemNum - 1][props.idx].optionText = problem;
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
