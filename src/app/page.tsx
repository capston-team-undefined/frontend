import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_components/sidebar/navbar";
import MainTop from "./_components/mainTop/mainTop";
import MainRecommend from "./_components/mainRecommend/mainRecommend";

export default function Home() {
  return (
  <main>
    <Navbar/>
    <MainTop/>
    <MainRecommend/>
  </main>
  );
}
