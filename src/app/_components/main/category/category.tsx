import Image from 'next/image'
import styles from './category.module.css'


export default function Category(){
    return(
        <div className={styles.main}>
            <div className={styles.titleContianer}>
                <label className={styles.title}>5개의 문제 유형을 지원합니다</label>
            </div>
            <div className={styles.categoryListContainer}>
                <div className={styles.itemContainer}>
                    <div className={styles.itemImg}>
                        <Image
                        alt=''
                        src="/assets/img/choice.svg"
                        width={150}
                        height={150}
                        />
                    </div>
                    <div className={styles.itemTitle}>
                    선택형
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemImg}>
                        <Image
                        alt=''
                        src="/assets/img/choiceList.svg"
                        width={150}
                        height={150}
                        />
                    </div>
                    <div className={styles.itemTitle}>
                    다중선택형
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemImg}>
                        <Image
                        alt=''
                        src="/assets/img/shortText.svg"
                        width={150}
                        height={150}
                        />
                    </div>
                    <div className={styles.itemTitle}>
                    단답형
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemImg}>
                        <Image
                        alt=''
                        src="/assets/img/text.svg"
                        width={150}
                        height={150}
                        />
                    </div>
                    <div className={styles.itemTitle}>
                    서술형
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.itemImg}>
                        <Image
                        alt=''
                        src="/assets/img/link.svg"
                        width={150}
                        height={150}
                        />
                    </div>
                    <div className={styles.itemTitle}>
                    연결형
                    </div>
                </div>
            </div>
        </div>
    )
}