import problemData, { probelm } from '@/utils/types/problem'
import styles from './problemPage.module.css'
import ProblemItem from '../problemItem/problemItem';
import { Dispatch, SetStateAction } from 'react';


export default function ProblemPage(props: {
    problemType: probelm[];
    problemNum: number;
    onDelete: Function
    problemData: problemData,
    setProblemData: Dispatch<SetStateAction<problemData | undefined>>
  }) {
    const handleDelete = (index: number) => {
      props.onDelete(index);
    };
  
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          페이지 {props.problemNum}
        </div>
        <div className={styles.itemList}
        style={{
          alignContent: `${props.problemType.length <= 2 ? "flex-start" : "space-around"}`
        }}
        >
          {props.problemType.map((it, idx) => {
            return (
                <ProblemItem
                key={idx}
                num={(props.problemNum - 1) * 3 + (idx + 1)}
                handleDelete={handleDelete}
                idx={idx}
                it={it}
                problemData={props.problemData}
                setProblemData={props.setProblemData}
                />
            );
          })}
        </div>
      </div>
    );
  }
  