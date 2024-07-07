import { Dispatch, SetStateAction } from 'react'
import styles from './problemBtn.module.css'


export default function ProblemBtn(props: {
    btn:number,
    maxPage:number,
    setBtn:Dispatch<SetStateAction<number>>

}){

    const handleOnClickPrev = () =>{
        props.setBtn(props.btn - 1);
    }
    const handleOnClickNext = () =>{
        props.setBtn(props.btn + 1);
    }
    return(
        <div className={styles.main}>
            {
                props.btn === 1 ?
                ""
                :
                <button
                className={styles.btn}
                onClick={handleOnClickPrev}
                >
                    이전 페이지
                </button>
            }
            {
                props.maxPage === props.btn ?

            <button
            className={styles.btn}
            >
                문제 제출
            </button>
            :
            <button
            className={styles.btn}
            onClick={handleOnClickNext}
            >
                다음 페이지
            </button>

            }
        </div>
    )
}