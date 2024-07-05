'use client'
import styles from './item.module.css'
import { useEffect, useRef, useState } from 'react';

export default function Item() {


  return (
    <div className={styles.main}>
      <div className={styles.img} />
      <div className={styles.problemContainer}>
        <div className={styles.profileImg} />
        <div>
          <div className={styles.title}>
            리눅스 마스터
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.date}>
              2024/10/11
            </div>
            <div className={styles.name}>
              유저이름
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
