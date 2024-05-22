"use client"
import { useState } from 'react'
import styles from './tagList.module.css'

export default function TagList(){
    const [tag,setTag] = useState(["자격증","안전교육","한국사","자격증","안전교육","한국사","자격증","안전교육","한국사","자격증","안전교육","한국사"])
    return(
        <div className={styles.main}>
            <div className={styles.list}>
                {
                    tag.map((it)=>{
                        return(
                            <div className={styles.tag}>
                                #{it}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}