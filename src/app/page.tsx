import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_components/sidebar/navbar";
import MainTop from "./_components/main/mainTop/mainTop";
import Category from "./_components/main/category/category";
import Middle from "./_components/main/middle/middle";
import Problem from "./_components/main/problem/problem";

export default function Home() {
  return (
  <main>
    <Navbar/>
    <MainTop/>
    <Category/>
    <Middle/>
    <Problem/>
  </main>
  );
}
