import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/app/_components/sidebar/navbar";
import Search from "./_components/search/search";
import TagList from "./_components/tagList/tagList";
import Recommend from "./_components/recommend/recommend";
import Like from "./_components/like/like";
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
      </div>
    </main>
  );
}
