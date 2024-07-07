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
import { ProblemDatas, ProblemTypes } from '@/utils/types/problemChk'

export default function ProblemItem(props:{
    allData: ProblemDatas[],
    num:number,
    problemNum:number
    idx:number,
    it:ProblemTypes,
    setProblemData: Dispatch<SetStateAction<ProblemDatas[]>>
}
){


    return(
        <div className={styles.main}>
            <div className={styles.mainProblem}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleIdx}>
                        {props.num}
                    </div> 
                    <div className={styles.titleInput}>
                        <div 
                        className={styles.inputProblem}
                        >
                            {props.it.question}
                        </div>
                        <div
                        className={styles.pointInput}
                        >
                            {props.it.point}점
                        </div>
                    </div>
                </div>
                {
                    props.it.type === 'choice' ?
                    <Choice
                    allData={props.allData}
                    problemData={props.it}
                    setProblemData={props.setProblemData}
                    problemNum={props.problemNum}
                    idx={props.idx}
                    />
                    :
                    props.it.type === 'choiceList' ?
                    <ChoiceList
                    allData={props.allData}
                    problemData={props.it}
                    setProblemData={props.setProblemData}
                    problemNum={props.problemNum}
                    idx={props.idx}
                    />
                    :
                    props.it.type === 'short text' ?
                    <ShortText
                    allData={props.allData}
                    problemData={props.it}
                    setProblemData={props.setProblemData}
                    problemNum={props.problemNum}
                    idx={props.idx}
                    />
                    :
                    props.it.type === 'text' ?
                    <Text
                    allData={props.allData}
                    problemData={props.it}
                    setProblemData={props.setProblemData}
                    problemNum={props.problemNum}
                    idx={props.idx}
                    />
                    :
                    props.it.type === "yesorno" ?
                    <YesOrNo
                    allData={props.allData}
                    problemData={props.it}
                    setProblemData={props.setProblemData}
                    problemNum={props.problemNum}
                    idx={props.idx}
                    />
                    :
                    ""
                }
            </div>
        </div>
    )
}