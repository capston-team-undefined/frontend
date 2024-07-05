'use client'
import problemData, { ProblemLink, coordinate } from '@/utils/types/problem';
import styles from './linking.module.css';
import { Dispatch, MouseEvent, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

export default function Linking(props:{
    problemData: problemData,
    setProblemData: Dispatch<SetStateAction<problemData | undefined>>,
    num:Number,
}){

    const exampleRef = useRef<HTMLButtonElement>(null);
    const wordRef = useRef<HTMLButtonElement>(null);
    const [probelmCoordinate, setProbelmCoordinate] = useState<coordinate[]>([]);
    const [problemPages, setProblemPages] = useState<JSX.Element[]>([]);
    const [problem, setProblem] = useState<ProblemLink[]>([
        {
            link: null,
            text: '',
            word: false
        },
        {
            link: null,
            text: '',
            word: true
        }
    ])

    const addChoice = () => {
        if (problem.length < 10) {
            setProblem([...problem, { link: null, text: '', word: false},{ link: null, text: '', word: true }])
        }
    }

    const removeChoice = (index: number) => {
        if (index > 0) {
            const newProblem = [...problem]
            newProblem.splice(index, 2)
            setProblem(newProblem)
        }
    }


    useEffect(()=>{
        console.log(problem);
        const list = props.problemData;
        if (list && list.data) {
            list.data[Number(props.num)- 1] = problem;
            props.setProblemData(list);
        }
    },[problem])
    
    const handleOnClickLink = (idx:number, ref:RefObject<HTMLButtonElement>, e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>{
        const { clientX, clientY } = e;
        
        if(!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();


        setProbelmCoordinate([...probelmCoordinate, { x: clientX, y: clientY, idx }]);
        
    }


   
    const linePush = () => {
        const line: JSX.Element[] = [];
        for (let i = 0; i < probelmCoordinate.length - 1; ++i) {
            console.log(probelmCoordinate[i].x,probelmCoordinate[i].y)
          line.push(
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `0`,
                left: `0`,
                width: `${probelmCoordinate[i + 1].x - probelmCoordinate[i].x}px`,
                height: `1px`,
                backgroundColor: 'black',
                transform: `translate(${probelmCoordinate[i].x}px, ${probelmCoordinate[i].y}px) rotate(${
                  Math.atan2(
                    probelmCoordinate[i + 1].y - probelmCoordinate[i].y,
                    probelmCoordinate[i + 1].x - probelmCoordinate[i].x
                  ) *
                  (180 / Math.PI)
                }deg)`,
              }}
            />
          );
        }
        setProblemPages(line);
      };
      
    useEffect(()=>{
        linePush()
    },[probelmCoordinate])
    return (
        <div className={styles.main}>
            <div className={styles.inforContainer}>
                <div className={styles.infor}>
                    정답연결
                </div>
            </div>
            {
                problem.map((it, index) => {
                    if(it.word) return;
                    return(
                        <div className={styles.problemInputContainer}>
                            <div className={styles.inputStyleContainer}>
                                <input 
                                type='text' 
                                placeholder='보기를 입력하세요'
                                className={styles.inputStyle}
                                />
                                <button
                                ref={exampleRef}
                                className={`${styles.inputBtn} ${styles.inputPositionL}`}
                                onClick={(e)=>{handleOnClickLink(index,exampleRef,e)}}
                                >●</button>
                            </div>
                            <div className={styles.inputStyleContainer}>
                                <button
                                ref={wordRef}
                                className={`${styles.inputBtn} ${styles.inputPositionR}`}
                                onClick={(e)=>{handleOnClickLink(index + 1,wordRef,e)}}
                                >●</button>
                                <input 
                                type='text'                                 
                                placeholder='단어'
                                className={styles.inputStyleL}
                                />
                            </div>
                        </div>
                    )
                })
            }
            {problem.length < 10 && (
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
            {problemPages}
        </div>
    )
}
