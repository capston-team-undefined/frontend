'use client'
import Image from 'next/image'
import styles from './modal.module.css'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProblemSetting } from '@/utils/types/problem'


export default function Modal(){
    const [primaryTag, setPrimaryTag] = useState(['자격증/취업', '초등', '중고등', '언어/외국어', '기타'])
    const [primaryTagHTML,setPrimaryTagHTML] = useState<JSX.Element[]>([]);
    const [inputTag, setInputTag] = useState('');
    const [setting, setSetting] = useState<ProblemSetting>({
        name: '',
        description: '',
        primaryTag: '',
        tag: []
    });

    const handleOnClickChangeTag = (tag:string) =>{
        const set = setting;

        set!.primaryTag = tag;
        setSetting(set);
    }

    const handleOnClickAddTag = () =>{
        const sets = setting;
        if(!inputTag) return;
        sets.tag.push(`#${inputTag}`);
        setInputTag('')

        setSetting(sets);
    }

    const handleOnChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        const set = setting;

        set.name = e.target.value;

        setSetting(set);
    }

    const handleOnChangeDescription = (e:ChangeEvent<HTMLInputElement>) => {
        const set = setting;

        set.description = e.target.value;

        setSetting(set);
    }

    useEffect(()=>{
        const root = primaryTag.map((it)=>{
            return(
                <div className={`${setting!.primaryTag === it ? styles.tagBtnOn :styles.tagBtn}`}
                onClick={()=>{handleOnClickChangeTag(it)}}
                >
                    {it}
                </div>  
            )
        })
        setPrimaryTagHTML(root)
    })
    
    return(
        <div className={styles.main}>
            <div className={styles.background}/>
            <div className={styles.modalMain}>
                <div className={styles.header}>
                    <label className={styles.title}>
                        문제집 설정
                    </label>
                </div>
                <div className={styles.inputContainer}>

                    <div className={styles.problemName}>
                        <div className={styles.icon}>
                            <Image
                            src="/assets/img/iconbook.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            />
                        </div>
                        <div className={styles.name}>
                            문제집 이름
                        </div>
                        <input
                        type="text" 
                        placeholder='문제집 이름을 입력해주세요.'
                        className={styles.input}
                        value={setting.name}
                        onChange={handleOnChangeName}
                        />
                    </div>

                    <div className={styles.problemName}>
                        <div className={styles.icon}>
                            <Image
                            src="/assets/img/iconWord.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            />
                        </div>
                        <div className={styles.name}>
                            문제집 설명
                        </div>
                        <input
                        type="text" 
                        placeholder='문제집 설명을 입력해주세요.'
                        className={styles.input}
                        value={setting.description}
                        onChange={handleOnChangeDescription}
                        />
                    </div>

                    <div className={styles.probleTag}>
                        <div className={styles.icon}>
                            <Image
                            src="/assets/img/hashtag.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            />
                        </div>
                        <div className={styles.name}>
                            필수 태그
                        </div>
                       <div className={styles.tags}>
                        {
                           primaryTagHTML
                        }
                       </div>
                    </div>

                    <div className={styles.probleTag}>
                        <div className={styles.icon}>
                            <Image
                            src="/assets/img/hashtag.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            />
                        </div>
                        <div className={styles.name}>
                            태그 추가
                        </div>
                       <div className={styles.tagInputContainer}>
                            <input
                            type="text" 
                            placeholder='# 문제집에 맞는 태그를 입력하세요'
                            className={styles.tagInput}
                            value={inputTag}
                            onChange={(e)=>{setInputTag(e.target.value)}}
                            />
                            <button
                            className={styles.btn}
                            onClick={handleOnClickAddTag}
                            >
                                추가
                            </button>
                        <div
                        className={styles.tagArry}
                        >
                            {
                                setting.tag.map((it)=>{
                                    return(
                                        <div className={styles.tagStyles}>
                                            {it}
                                        </div>
                                    )
                                })
                            }
                        </div>
                       </div>
                    </div>
                    <div className={styles.submitBtnContainer}>
                        <div className={styles.cancelBtn}>
                            취소
                        </div>
                        <div className={styles.submitBtn}>
                            문제집 만들기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}