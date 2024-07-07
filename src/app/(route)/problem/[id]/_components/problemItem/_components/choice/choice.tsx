'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './choice.module.css'
import problemData, { ProblemChoice } from '@/utils/types/problem'
import Image from 'next/image'
import { ProblemDatas, ProblemTypes } from '@/utils/types/problemChk'

export default function Choice(props:{
    allData: ProblemDatas[],
    problemData: ProblemTypes,
    setProblemData: Dispatch<SetStateAction<ProblemDatas[]>>,
    problemNum:number,
    idx:number
}) {
    const [problem, setProblem] = useState<ProblemChoice[]>([])
    const [input, setInput] = useState(false);

    useEffect(()=>{
        const list:any = props.problemData.optionText;
        const problem:ProblemChoice[] = [];
        list.map((it:any)=>{
            problem.push({incorrect: false, text: String(it)})
        })
        setProblem(problem);
    },[])

    useEffect(()=>{
        if(!input) return;
        console.log(props.allData);
        const list = props.allData;
        if (list && problem) {
            list[props.problemNum - 1][props.idx].optionText = problem;
            props.setProblemData(list);
        }
        setInput(false);
    },[input])
    
    return (
        <div className={styles.main}>
            {
                problem.map((it, index) => (
                    <div className={styles.inputBoxContainer} key={index}>
                        <input
                            type='radio'
                            className={styles.radioBox}
                            name='incorrect'
                            checked={it.incorrect}
                            onChange={() => {
                                const newProblem = [...problem];
                                newProblem.forEach((p, i) => (p.incorrect = i === index));
                                setProblem(newProblem);
                                setInput(true);
                            }}
                        />
                        <div className={styles.textBox}>
                            {it.text}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
