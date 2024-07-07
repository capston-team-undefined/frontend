'use client'
import problemData, { ProblemChoice, ProblemText } from '@/utils/types/problem';
import styles from './shortText.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ProblemDatas, ProblemTypes } from '@/utils/types/problemChk';



export default function ShortText(props:{
    allData: ProblemDatas[],
    problemData: ProblemTypes,
    setProblemData: Dispatch<SetStateAction<ProblemDatas[]>>,
    problemNum:number,
    idx:number
}){
    const [problem, setProblem] = useState<ProblemText>({
        text: ''
    });
    useEffect(()=>{
        const list = props.allData;
        if (list && problem) {
            list[props.problemNum - 1][props.idx].optionText = problem;
            props.setProblemData(list);
        }
    },[problem])
    return(
        <div className={styles.main}>
            <div className={styles.textInputContainer}>
                <input type='text' placeholder='답안을 입력하시오.'
                className={styles.textInput}
                onChange={(e)=>{setProblem({text: e.target.value})}}
                value={problem.text}
                />
            </div>
        </div>
    )
}