'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Sidebar from "@/app/_components/sidebar/sidebar";
import { useState } from "react";
import FormBtn from "./_components/formBtn/formBtn";
type Keypairs = 'ppk' | 'pem';

export default function Home() {
  const [name,setName] = useState('');
  const [dep,setDep] = useState('');
  const [ram, setRam] = useState('512MB');
  const [HDD, setHDD] = useState(2);
  const [open, setOpen] = useState('22,80,443');
  const [keypair, setKeypair] = useState<Keypairs>('ppk');

  const submit = () =>{

  }
  return (
    <main>
      <Sidebar/>
      <div className={styles.mainContainer}>
        <div className={styles.startContainer}>
          <div className={styles.titleContaniner}>
            서버 등록하기
          </div>
          <div className={styles.formContainer}>

            <div className={styles.serverNameContainer}>
              <label className={styles.titleFont}>서버 이름</label>
              <input 
              type="text" 
              value={name} 
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="서버 이름을 입력해주세요."
              className={styles.serverNameInput}
              />
            </div>

            <div className={styles.serverDepContainer}>
              <label className={styles.titleFont}>서버 설명</label>
              <textarea  
              value={dep} 
              onChange={(e)=>{setDep(e.target.value)}}
              placeholder="서버 설명을 입력해주세요."
              className={styles.serverDepInput}
              />
            </div>
            
            <div className={styles.serverRemContainer}>
              <label className={styles.titleFont}>렘</label>
              <div className={styles.ramChoiceBtn}>
                <button 
                className={`${ram === '512MB' ? styles.buttonOn : styles.buttonOff}`}
                onClick={()=>{
                  setRam('512MB');
                }}
                >
                  512MB
                </button>
                <button 
                className={`${ram === '1GB' ? styles.buttonOn : styles.buttonOff}`}
                onClick={()=>{
                  setRam('1GB');
                }}
                >
                  1GB
                </button>
              </div>
            </div>

            <div className={styles.serverRemContainer}>
              <label className={styles.titleFont}>저장공간</label>
              <div className={styles.ramChoiceBtn}>
                <button 
                className={`${HDD === 2 ? styles.buttonOn : styles.buttonOff}`}
                onClick={()=>{
                  setHDD(2);
                }}
                >
                  2GB
                </button>
                <button 
                className={`${HDD === 4 ? styles.buttonOn : styles.buttonOff}`}
                onClick={()=>{
                  setHDD(4);
                }}
                >
                  4GB
                </button>
                <button 
                className={`${HDD === 8 ? styles.buttonOn : styles.buttonOff}`}
                onClick={()=>{
                  setHDD(8);
                }}
                >
                  8GB
                </button>
              </div>
            </div>
            
            <div className={styles.serverNameContainer}>
              <label className={styles.titleFont}>오픈 포트</label>
              <div className={styles.serverOpenInputContainer}>
              <input 
              type="text" 
              value={open} 
              onChange={(e)=>{setOpen(e.target.value)}}
              placeholder="포트를 입력해주세요."
              className={styles.serverOpenInput}
              />
              <label className={styles.portDep}>
              ※ 입력하지 않으신 경우 기본 포트 (22, 80, 442)로 설정됩니다.
              </label>
              </div>
            </div>

            <div className={styles.serverRemContainer}>
              <label className={styles.titleFont}>키페어 선택</label>
              <div className={styles.keypairsContainer}>
                <div className={styles.keypairContainer}>
                  <button 
                  className={`${keypair === 'ppk' ? styles.keypairRadioOn : styles.keypairRadioOff}`}
                  onClick={()=>{
                    setKeypair('ppk');
                  }}
                  >
                  </button>
                  <label className={styles.keypairs}>ppk</label>
                </div>
                <div className={styles.keypairContainer}>
                  <button 
                  className={`${keypair === 'pem' ? styles.keypairRadioOn : styles.keypairRadioOff}`}
                  onClick={()=>{
                    setKeypair('pem');
                  }}
                  >
                  </button>
                  <label className={styles.keypairs}>pem</label>
                </div>
              </div>
            </div>
            <FormBtn onSubmit={submit}/>
          </div>
        </div>
      </div>
    </main>
  );
}
