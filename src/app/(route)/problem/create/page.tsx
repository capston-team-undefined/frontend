'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_components/navbar/navbar";
import Sidebar from "./_components/sidebar/sidebar";
import ProblemPage from "./_components/problemPage/problemPage";
import AddProblem from "./_components/addProblem/addProblem";
import { useEffect, useState } from "react";
import problemData from "@/utils/types/problem";
import Modal from "./_components/modal/modal";

export default function Home() {
  const [problemData, setProblemData] = useState<problemData>({
    setting: {
      name: '',
      description: '',
      image: null,
      primaryTag: '',
      tag: []
    },
    time: {
      hh: 0,
      mm: 0,
      ss: 0
    }
  });
  const [problemPages, setProblemPages] = useState<JSX.Element[]>([]);
  const [modal,setModal] = useState(true);
  const [reload,setReload] = useState(false);
  
  const handleDeleteProblem = (index: number) => {
    setReload(true);

    if(!problemData?.probelmType) return;
    const updatedProblemType = [...problemData.probelmType];

    if(!problemData?.problemText) return;
    const updatedProblemText = [...problemData.problemText];

    if(!problemData?.point) return;
    const updatedProblemPonit = [...problemData.point];

    if(!problemData?.data) return;
    const updatedProblemData = [...problemData.data];

    updatedProblemType.splice(index, 1);
    updatedProblemText.splice(index, 1);
    updatedProblemPonit.splice(index, 1);
    updatedProblemData.splice(index, 1);

    setProblemData({
      time: problemData.time,
      setting: problemData.setting,
      probelmType: updatedProblemType,
      problemText: updatedProblemText,
      point: updatedProblemPonit,
      data: updatedProblemData
    });
  }; 

  const updateProblemPages = () => {
    const pages: JSX.Element[] = [];
    for (let i = 0; i < Math.ceil(Number(problemData?.probelmType?.length ? problemData.probelmType.length : 0) / 3); i++) {
      pages.push(
        <ProblemPage
          key={i}
          problemType={problemData?.probelmType ? problemData.probelmType.slice(i * 3, (i * 3) + 3) : []}
          onDelete={handleDeleteProblem}
          problemNum={i + 1}
          problemData={problemData!}
          setProblemData={setProblemData}
        />
      );
    }
    setProblemPages(pages);
  };

  useEffect(() => {
    if(reload){
      updateProblemPages();
      setReload(false);
    }
    
  }, [reload]);
  
  return (
  <main>
    <Modal modal={modal} setModal={setModal} problemData={problemData} setProblemData={setProblemData}/>
    <Navbar problemType={problemData?.probelmType ? problemData.probelmType : []} setModal={setModal} problemData={problemData}/>
    <Sidebar problemType={problemData} setProblemType={setProblemData} setReload={setReload}/>
    <div className={styles.problemContainer}>
        {problemPages}
        {
           Number(problemData?.probelmType ?problemData.probelmType.length : 0) === 0 ?
          <AddProblem/>
          :
          <></>
         
        }
    </div>
  </main>
  );
}
