'use client'
import styles from './item.module.css'
import { useEffect, useRef, useState } from 'react';

export default function Item() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isWidthGreater, setIsWidthGreater] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (divRef.current) {
        const { offsetWidth, offsetHeight } = divRef.current;
        console.log("width: " + offsetWidth, "height: " + offsetHeight);
        setIsWidthGreater(offsetWidth > offsetHeight);
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [divRef]);

  return (
    <div className={`${styles.main} ${isWidthGreater ? styles.wide : ''}`} ref={divRef}
    style={
      isWidthGreater ?
      {
        width: `${divRef.current?.offsetWidth ? divRef.current?.offsetWidth - 50 : 0}px`,
      }
      :
      {}
    }>
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
