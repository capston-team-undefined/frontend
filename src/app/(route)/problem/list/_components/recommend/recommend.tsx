'use client'
import styles from './recommend.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Item from '@/app/_components/item/item';

export default function Recommend() {

    const [tag, setTag] = useState(['언어', '초등', '영어']);
    const settings = {
        dots: true,
        dotsClass: `slick-dots ${styles.customDots}`,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.main}>
            문제집 추천
            <Slider {...settings}>
                {
                    Array(4).fill('').map((_, index) => (
                        <div key={index} className={styles.container}>
                            <div className={styles.containerMargin}>
                                <div className={styles.textContainer}>
                                    <div className={styles.titleContainer}>
                                        <div className={styles.subTitle}>
                                            교육부 영단어 3500개 외우기
                                        </div>
                                        <div className={styles.title}>
                                            초등영단어 (65)
                                        </div>
                                        <div className={styles.btnContainer}>
                                            <button className={styles.btnProblem}>
                                                문제풀기
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.tagList}>
                                        {
                                            tag.map((it, idx) => (
                                                <div key={idx} className={styles.tag}>
                                                    #{it}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={styles.itemContainer}>
                                    <div className={styles.item}>
                                        <Item />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}
