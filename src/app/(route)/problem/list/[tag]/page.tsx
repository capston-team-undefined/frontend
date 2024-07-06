'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/app/_components/sidebar/navbar";
import { usePathname, useSearchParams } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const lastPathSegment = pathname.split('/').pop();


  console.log(lastPathSegment);
  return (
    <main>  
      <Navbar/>
    </main>
  );
}
