'use client'
import problemData, { probelm } from '@/utils/types/problem'
import styles from './problemItem.module.css'
import Image from 'next/image'
import Choice from './_components/choice/choice'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import ChoiceList from './_components/choiceList/choiceList'
import ShortText from './_components/shortText/shortText'
import Text from './_components/text/text'
import Linking from './_components/linking/linking'
import YesOrNo from './_components/yesOrNo/yesOrNo'

export default function ProblemItem(props:{
    num:number,
    handleDelete:Function,
    idx:number,
    it:probelm,
    problemData: problemData,
    setProblemData: Dispatch<SetStateAction<problemData | undefined>>
}
){

    const handleOnChangeText = (e:ChangeEvent<HTMLInputElement>) =>{
        const list = props.problemData;
        if (list && list.problemText) {
            list.problemText[props.num - 1] = e.target.value;
            props.setProblemData(list);
        }
    }

    const handleOnChangePoint = (e:ChangeEvent<HTMLInputElement>) =>{
        const list = props.problemData;
        if (list && list.point) {
            list.point[props.num - 1] = Number(e.target.value);
            props.setProblemData(list);
        }
    }
    return(
        <div className={styles.main}>
            <div className={styles.cancel}>
            {props.num}문항
            <Image
            src="/assets/img/x.svg" 
            alt="user icon"
            width={15}  
            height={15}  
            className={styles.icon}
            onClick={()=>{props.handleDelete(props.idx)}}
            />
            </div>
            <div className={styles.mainProblem}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleIdx}>
                        {props.num}
                    </div> 
                    <div className={styles.titleInput}>
                        <input type="text"
                        placeholder="문제를 입력하세요"
                        className={styles.inputProblem}
                        onChange={handleOnChangeText}
                        />
                        <input type="text"
                        placeholder="배점입력"
                        className={styles.pointInput}
                        onChange={handleOnChangePoint}
                        />
                    </div>
                </div>
                {
                    props.it === 'choice' ?
                    <Choice
                    problemData={props.problemData}
                    setProblemData={props.setProblemData}
                    num={props.num}
                    />
                    :
                    props.it === 'choiceList' ?
                    <ChoiceList
                    problemData={props.problemData}
                    setProblemData={props.setProblemData}
                    num={props.num}
                    />
                    :
                    props.it === 'short text' ?
                    <ShortText
                    problemData={props.problemData}
                    setProblemData={props.setProblemData}
                    num={props.num}
                    />
                    :
                    props.it === 'text' ?
                    <Text
                    problemData={props.problemData}
                    setProblemData={props.setProblemData}
                    num={props.num}
                    />
                    :
                    props.it === "yesorno" ?
                    <YesOrNo
                    problemData={props.problemData}
                    setProblemData={props.setProblemData}
                    num={props.num}
                    />
                    :
                    <Linking
                    problemData={props.problemData}
                    setProblemData={props.setProblemData}
                    num={props.num}
                    />
                }
            </div>
        </div>
    )
}