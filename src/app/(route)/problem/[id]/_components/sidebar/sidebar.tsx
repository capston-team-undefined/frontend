import Image from 'next/image'
import styles from './sidebar.module.css'
import { Dispatch, SetStateAction } from 'react'
import problemData, { probelm } from '@/utils/types/problem'



export default function Sidebar(props: {problemType:problemData,setProblemType:Dispatch<SetStateAction<problemData | undefined>>, setReload:Dispatch<SetStateAction<boolean>>}){

    const problemAdd = (type:probelm) =>{
        const list = props.problemType;
        props.setReload(true);

        if(!list){
            props.setProblemType({
                probelmType: [type],
                problemText: [''],
                point: [0],
                data: [{}]
            })
            return;
        }
        list.probelmType = list?.probelmType ? [...list.probelmType, type] : [type];
        list.problemText = list?.problemText ? [...list.problemText, ''] : [''];
        list.point = list?.point ? [...list.point, 0] : [0];
        list.data = list?.data ? [...list.data, {}] : [{}];
        props.setProblemType(list);
    }

    return(
        <div className={styles.main}>
            <div className={styles.problemTypeContainer}>
                <div className={styles.title}>
                    문제유형
                </div>
                <div className={styles.problemType}>
                    <div className={styles.types} onClick={()=>{problemAdd('choice')}}>
                    <Image
                        alt=''
                        src="/assets/img/choice.svg"
                        width={60}
                        height={60}
                        />
                        선택형
                    </div>
                    <div className={styles.types} onClick={()=>{problemAdd('choiceList')}}>
                    <Image
                        alt=''
                        src="/assets/img/choiceList.svg"
                        width={60}
                        height={60}
                        />
                        다중선택형
                    </div>
                    <div className={styles.types} onClick={()=>{problemAdd('short text')}}>
                    <Image
                        alt=''
                        src="/assets/img/shortText.svg"
                        width={60}
                        height={60}
                        />
                        단답형
                    </div>
                    <div className={styles.types} onClick={()=>{problemAdd('text')}}>
                    <Image
                        alt=''
                        src="/assets/img/text.svg"
                        width={60}
                        height={60}
                        />
                        서술형
                    </div>
                    <div className={styles.types} onClick={()=>{problemAdd('yesorno')}}>
                    <Image
                        alt=''
                        src="/assets/img/yesorno.svg"
                        width={60}
                        height={60}
                        />
                        O/X형
                    </div>
                </div>
            </div>
            <div className={styles.timeLimitContainer}>
                <div className={styles.title}>
                    시간제한
                </div>
                <div className={styles.timeLimit}>
                    <div className={styles.clockIcon}>
                        <Image
                        alt=''
                        src="/assets/img/clock.svg"
                        width={60}
                        height={60}
                        />
                    </div>
                    <div className={styles.timeInputContainer}>
                        <div>
                            <input type='text' maxLength={2} placeholder='hh' className={styles.timeInput}/>
                            시간
                        </div>
                        <div>
                            <input type='text' maxLength={2} placeholder='mm' className={styles.timeInput}/>
                            분
                        </div>
                        <div>
                            <input type='text' maxLength={2} placeholder='ss' className={styles.timeInput}/>
                            초
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}