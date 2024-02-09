import Image from "next/image";
import styles from "./formBtn.module.css";
export default function FormBtn(props: {onSubmit:Function}) {
 
  return (
    <button
    className={styles.btnStyles}
    onClick={()=>{props.onSubmit()}}
    >
        서버 생성하기
    </button>
  );
}
