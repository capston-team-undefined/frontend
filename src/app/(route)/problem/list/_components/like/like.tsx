'use client'
import styles from './like.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Item from '@/app/_components/item/item';

export default function Like(){
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return(
        <div className={styles.main}>
            좋아요 순위
            <div className={styles.container}>
                <Slider {...settings}>
                    {
                        Array(12).fill('').map((_, index) => (
                                <div className={styles.itemContainer}>
                                    <div className={styles.flexItem}>
                                        <div className={styles.item}>
                                            <Item />
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}