'use client'
import Slider from 'react-slick'
import styles from './problem.module.css'
import Item from '../../item/item'
import { useRouter } from 'next/navigation'


export default function Problem(){
    const router = useRouter()
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    const handleOnClickList = () =>{
        router.push('/problem/list');
    }
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <h3 className={styles.subtitle}>다양한 문제를 풀어보세요</h3>
                <h2 className={styles.title}>다양한 문제지들이 30여 가지 존재 합니다</h2>
                <div className={styles.listContainer}>
                <Slider {...settings}>
                    {
                        Array(8).fill('').map((_, index) => (
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
                <div className={styles.btnContainer}>
                    <label className={styles.footerTitle}>사용자가 직접 제작한 더 많은 문제집을 만나보세요.</label>
                    <div className={styles.btn}>
                        <button className={styles.btnLink} onClick={handleOnClickList}>
                        더 많은 문제집 보기
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    )
}