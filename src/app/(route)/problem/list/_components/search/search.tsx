"use client"
import { ChangeEvent, useState } from 'react'
import styles from './search.module.css'
import Image from 'next/image';

export default function Search(){
    const [tag, setTag] = useState(["자격증/취업","초등","중고등","외국어/언어","컴퓨터","기타","전체보기"]);
    const [search,setSearch] = useState('');

    const handleOnChangeSearch = (e:ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value)
    }
    return(
        <div className={styles.main}>
            <div className={styles.list}>
                {
                    tag.map((it)=>{
                        return(
                            <div className={styles.listTag}>
                                {it}
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.searchContainer}>
                <input
                type='text'
                value={search}
                onChange={handleOnChangeSearch}
                className={styles.inputBox}
                />
                <Image 
                src="/assets/img/search.svg"
                alt="logo"
                width={30}
                height={30}
                className={styles.searchImg}
                />
            </div>
        </div>
    )
}