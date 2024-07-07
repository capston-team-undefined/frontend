'use client'
import problemData, { ProblemChoice, ProblemText } from '@/utils/types/problem';
import styles from './shortText.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';



export default function ShortText(props:{
    problemData: problemData,
    setProblemData: Dispatch<SetStateAction<problemData>>,
    num:Number
}){
    const [problem, setProblem] = useState<ProblemText>({
        text: ''
    });
    useEffect(()=>{
        const list = props.problemData;
        if (list && list.data) {
            list.data[Number(props.num)- 1] = problem;
            props.setProblemData(list);
            console.log(list);
        }
    },[problem])
    return(
        <div className={styles.main}>
            <div className={styles.inforContainer}>
                <div className={styles.infor}>
                    정답입력
                </div>
            </div>
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