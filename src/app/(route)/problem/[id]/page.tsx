'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_components/navbar/navbar";
import ProblemPage from "./_components/problemPage/problemPage";
import {useState } from "react";
import { usePathname } from "next/navigation";
import {ProblemDatas} from "@/utils/types/problemChk";
import ProblemBtn from "./_components/problemBtn/problemBtn";
import Modal from "./_components/modal/modal";

export default function Home() {
  const pathname = usePathname();
  const lastPathSegment = pathname.split('/').pop();
  const [pageNum, setPageNum] = useState(1);
  const [modal, setModal] = useState(true);
  const [problemData, setProblemData] = useState<ProblemDatas[]>([
    [
      {
        optionText: [
          "1592년조선은 일본을 침략하였다",
          "이승만은 3.1혁명이후 대한민국 임시정부를 설립하였다",
          "박근혜는 대한민국 최초의 여성대통령이다",
          "홍범도는 청산리 전투에서 승리를 이끌었다",
          "이승만은 무력에 의한 독립을 지지하였다"
        ],
        question: "이중 알맞은 것을 고르시오.",
        type: "choice",
        point: 20
      },
      {
        optionText: [
          "전두환은 육사 11기이다",
          "영화 서울의 봄처럼 장태완 장군은 전두환에 맞서 마지막에 야포를 준비하여 포격을 준비하였다",
          "박정희는 하나회가 크는 것을 지원했다",
          "김재규는 박정희를 암살하여 정치 지도자가 될려고 하였다",
          "서울의 봄은 1980년대의 시대를 일컫는다 "
        ],
        question: "이중 알맞은 것을 모두 고르시오.",
        type: "choiceList",
        point: 20
      },
      {
        optionText: "",
        question: "1997년 김영삼대통령 말기에 있었던 사건에 대해 답하시오.",
        point: 20,
        type: "short text"
      }
    ],
    [
      {
        optionText: "",
        question: "대한민국 삼권에 대해 쓰시오",
        point: 20,
        type: "text"
      },
      {
        optionText: "",
        question: "현재 대통령을 임한 사람의 수는 20명이다",
        point: 20,
        type: "yesorno"
      }
    ]
  ]);
  
  return (
  <main>
    <Navbar problemData={problemData}/>
    <Modal
    modal={modal}
    setModal={setModal}
    />
    <div className={styles.problemContainer}>
        <ProblemPage
          allData={problemData}
          problemData={problemData[pageNum - 1]}
          problemNum={pageNum}
          setProblemData={setProblemData}
        />
    </div>
        <div className={styles.btnContainer}>
          <ProblemBtn
          btn={pageNum}
          maxPage={problemData.length}
          setBtn={setPageNum}
          />
        </div>
  </main>
  );
}



