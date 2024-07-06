'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './choice.module.css'
import problemData, { ProblemChoice } from '@/utils/types/problem'
import Image from 'next/image'

export default function Choice(props:{
    problemData: problemData,
    setProblemData: Dispatch<SetStateAction<problemData | undefined>>,
    num:Number
}) {
    const [problem, setProblem] = useState<ProblemChoice[]>([
        {
            incorrect: false,
            text: ''
        }
    ])

    const addChoice = () => {
        if (problem.length < 5) {
            setProblem([...problem, { incorrect: false, text: '' }])
        }
    }

    const removeChoice = (index: number) => {
        if (index > 0) {
            const newProblem = [...problem]
            newProblem.splice(index, 1)
            setProblem(newProblem)
        }
    }

    useEffect(()=>{
        const list = props.problemData;
        if (list && list.data) {
            list.data[Number(props.num)- 1] = problem;
            props.setProblemData(list);
        }
    },[problem])
    
    return (
        <div className={styles.main}>
            <div className={styles.inforContainer}>
                <div className={styles.infor}>
                    정답체크
                </div>
            </div>
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
                            }}
                        />
                        <input
                            type='text'
                            className={styles.textBox}
                            placeholder='보기를 입력하세요'
                            value={it.text}
                            onChange={(e) => {
                                const newProblem = [...problem];
                                newProblem[index].text = e.target.value;
                                setProblem(newProblem);
                            }}
                        />
                        {index > 0 && (
                            <Image
                                src="/assets/img/x.svg"
                                alt="user icon"
                                width={20}
                                height={20}
                                className={styles.icon}
                                onClick={() => removeChoice(index)}
                            />
                        )}
                    </div>
                ))
            }
            {problem.length < 5 && (
                <div
                    className={styles.problemAddContainer}
                >
                    <button
                        className={styles.problemAdd}
                        onClick={addChoice}
                    >
                        보기 추가
                    </button>
                </div>
            )}
        </div>
    )
}
