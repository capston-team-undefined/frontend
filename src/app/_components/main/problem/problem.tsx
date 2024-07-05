import styles from './problem.module.css'


export default function Problem(){
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <h3 className={styles.subtitle}>다양한 문제를 풀어보세요</h3>
                <h2 className={styles.title}>다양한 문제지들이 30여 가지 존재 합니다</h2>
                <div className={styles.listContainer}>
                    
                </div>
                <div className={styles.btnContainer}>
                    <label className={styles.footerTitle}>사용자가 직접 제작한 더 많은 문제집을 만나보세요.</label>
                    <div className={styles.btn}>
                        <button className={styles.btnLink}>
                        더 많은 문제집 보기
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    )
}