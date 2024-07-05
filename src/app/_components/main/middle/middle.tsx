import styles from './middle.module.css'

export default function Middle(){
    return(
        <div className={styles.main}>
            <div className={styles.backgroundImg}/>
            <div className={styles.explanationContainer}>
                <div className={styles.text1}>
                    <label className={styles.text1Item1}>인터넷이 연결된 장치만</label><br/>
                    <label className={styles.text1Item2}>있다면 언제 어디서나 문제 풀이 가능</label>
                </div>
                <div className={styles.text2}>
                인터넷 연결 장치가 있다면, 어디서나 문제를 해결할 수 있어.<br/>
                학습 자료 접근성이 크게 향상됩니다. 이는 모든 학습자와 교육자에게<br/>
                시간과 장소의 제약 없이 학습 기회를 넓히고, 학습 경험을 풍부하게 합니다.
                </div>
            </div>
        </div>
    )
}