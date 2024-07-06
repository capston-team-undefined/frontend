'use client'
import Item from '@/app/_components/item/item'
import styles from './BigTagList.module.css'


export default function BigTagList(props:{
    name:string
}){
    return(
        <div className={styles.main}>
            <label>{props.name}</label>
            <div className={styles.bigTagListContainer}>
                {
                    Array(6).fill('').map((_, index) => (
                        <div className={styles.itemContainer}>
                            <Item />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}