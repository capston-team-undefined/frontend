import styles from './mainRecommend.module.css'


export default function MainRecommend(){
    return(
        <div className={styles.main}>
            <div className={styles.recommendContainer}>
                <h1 className={styles.headTitle}>이런 분들께 추천합니다</h1>

                <div className={styles.itemList}>
                    <div className={styles.itemContainer}>

                    </div>
                    <div className={styles.itemContainer}>

                    </div>
                    <div className={styles.itemContainer}>

                    </div>
                    <div className={styles.itemContainer}>

                    </div>
                </div>
            </div>
        </div>
    )
}