'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './choiceList.module.css'
import problemData, { ProblemChoice } from '@/utils/types/problem'
import Image from 'next/image'
import { ProblemDatas, ProblemTypes } from '@/utils/types/problemChk'

export default function ChoiceList(props:{
    allData: ProblemDatas[],
    problemData: ProblemTypes,
    setProblemData: Dispatch<SetStateAction<ProblemDatas[]>>,
    problemNum:number,
    idx:number
}) {
    const [problem, setProblem] = useState<ProblemChoice[]>([])
    const [input, setInput] = useState(false);

    const toggleIncorrect = (index: number) => {
        const newProblem = [...problem];
        newProblem[index].incorrect = !newProblem[index].incorrect;
        setProblem(newProblem);
        setInput(true);
    }

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
        const list = props.allData;
        console.log(list[0][1], props.problemNum - 1,props.idx);
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
                            type='checkbox'
                            className={styles.radioBox}
                            checked={it.incorrect}
                            onChange={() => toggleIncorrect(index)}
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
