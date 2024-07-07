import problemData, { probelm } from '@/utils/types/problem'
import styles from './problemPage.module.css'
import ProblemItem from '../problemItem/problemItem';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { ProblemDatas } from '@/utils/types/problemChk';


export default function ProblemPage(props: {
    allData: ProblemDatas[],
    problemNum: number,
    problemData: ProblemDatas,
    setProblemData: Dispatch<SetStateAction<ProblemDatas[]>>
  }) {
    useEffect(()=>{
      console.log(props.problemData)
    },[])
  
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          페이지 {props.problemNum}
        </div>
        <div className={styles.itemList}
        style={{
          alignContent: `${props.problemData.length <= 2 ? "flex-start" : "space-around"}`
        }}
        >
          {props.problemData.map((it, idx) => {
            return (
                <ProblemItem
                key={idx}
                allData={props.allData}
                num={(props.problemNum - 1) * 3 + (idx + 1)}
                problemNum={props.problemNum}
                idx={idx}
                it={it}
                setProblemData={props.setProblemData}
                />
            );
          })}
        </div>
      </div>
    );
  }
  