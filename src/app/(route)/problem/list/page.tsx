import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/app/_components/sidebar/navbar";
import Search from "./_components/search/search";
import TagList from "./_components/tagList/tagList";
import Recommend from "./_components/recommend/recommend";
import Like from "./_components/like/like";
import BigTagList from "./_components/bigTagList/bigTagList";
export default function Home() {
  return (
    <main>  
      <Navbar/>
      <Search/>
      <TagList/>
      <div className={styles.main}>
        <div className={styles.topContainer}>
          <div className={styles.recommendContainer}>
            <Recommend/>
          </div>
          <div className={styles.likeContainer}>
            <Like/>
          </div>
        </div>
        <div className={styles.primaryTagContainer}>
          <BigTagList name="취업/자격증"/>
          <BigTagList name="초등"/>
          <BigTagList name="중고등"/>
          <BigTagList name="외국어/언어"/>
          <BigTagList name="컴퓨터"/>
          <BigTagList name="기타"/>
        </div>
      </div>
    </main>
  );
}
