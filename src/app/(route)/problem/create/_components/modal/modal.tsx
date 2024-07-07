'use client'
import Image from 'next/image'
import styles from './modal.module.css'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import problemData, { ProblemSetting } from '@/utils/types/problem'


export default function Modal(props:{
    modal:boolean, 
    setModal:Dispatch<SetStateAction<boolean>>, 
    problemData:problemData | undefined, 
    setProblemData:Dispatch<SetStateAction<problemData>> 
}){
    const [primaryTag, setPrimaryTag] = useState(['자격증/취업', '초등', '중고등', '언어/외국어', '기타'])
    const [reload, setReload] = useState(true);
    const [primaryTagHTML,setPrimaryTagHTML] = useState<JSX.Element[]>([]);
    const [inputTag, setInputTag] = useState('');
    const [setting, setSetting] = useState<ProblemSetting>({
        name: '',
        description: '',
        primaryTag: '',
        tag: [],
        image: null
    });

    const handleOnClickChangeTag = (tag:string) =>{
        setSetting((prevSetting) => ({
            ...prevSetting,
            primaryTag: tag,
        }));
        
        setReload(true);
    }

    const handleOnClickAddTag = () =>{
        const sets = setting;
        if(!inputTag) return;
        sets.tag.push(`#${inputTag}`);
        setInputTag('')

        setSetting(sets);
    }

    const handleOnChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setSetting((prevSetting) => ({
            ...prevSetting,
            name: e.target.value,
        }));
    }

    const handleOnChangeDescription = (e:ChangeEvent<HTMLInputElement>) => {
        setSetting((prevSetting) => ({
            ...prevSetting,
            description: e.target.value,
        }));
    }

    useEffect(()=>{
        if(!reload) return;

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
        setReload(false);
    },[reload])
    
    const handleOnclickCancel = () =>{
        setSetting({
            name: '',
            description: '',
            primaryTag: '',
            tag: [],
            image: null
        })
        props.setModal(false);
    }

    const handleOnClickSubmit = () => {
        if(props.problemData)
        props.setProblemData({
            data: props.problemData?.data,
            point: props.problemData?.point,
            time: props.problemData.time,
            probelmType: props.problemData?.probelmType,
            problemText: props.problemData?.problemText,
            setting: {
                name: setting.name,
                description: setting.description,
                primaryTag: setting.primaryTag,
                tag: setting.tag,
                image: setting.image
            }
        });

        setSetting({
            name: '',
            description: '',
            primaryTag: '',
            tag: [],
            image: null
        })
        props.setModal(false);
    }

    useEffect(()=>{
        if(props.modal){
            if(props.problemData)
            setSetting(props.problemData?.setting);
        }
    },[props.modal])

    const [dragOver, setDragOver] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);

        // 드래그된 파일 정보 가져오기
        const file = e.dataTransfer.files[0];

        // 파일 유효성 검사 및 처리
        if (file && file.type.startsWith('image/')) {
            const set = setting;
            set.image = file;
            setSetting(set);
        }
    }

    return(
        <div className={styles.main}
        style={
            props.modal ?
            {display: 'flex'}
            :
            {display: 'none'}
        }
        >
            <div className={styles.background}/>
            <div className={styles.modalMain}>
                <div className={styles.header}>
                    <label className={styles.title}>
                        문제집 설정
                    </label>
                </div>
                <div className={styles.inputContainer}>

                    <div className={styles.probleTag}>
                        <div className={styles.icon}>
                            <Image
                            src="/assets/img/iconbook.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            />
                        </div>
                        <div className={styles.name}>
                            표지 추가
                        </div>
                        <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={styles.inputImg}
                        >
                            드레그 엔 드랍 
                        </div>
                        <div
                        className={styles.imageStylesContainer}
                        >
                        {setting.image ?
                           <img
                           src={URL.createObjectURL(setting.image)}
                           alt="Uploaded Image"
                            className={styles.imageStyles}
                           /> 
                           :
                           "이미지가 여기에 표시됩니다"
                        }
                        </div>
                    </div>
                    
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
                        <div className={styles.cancelBtn}
                        onClick={handleOnclickCancel}
                        >
                            취소
                        </div>
                        <div className={styles.submitBtn}
                        onClick={handleOnClickSubmit}
                        >
                            문제집 만들기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}