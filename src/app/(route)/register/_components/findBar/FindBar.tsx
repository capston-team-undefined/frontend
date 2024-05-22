import styles from "@/app/(route)/register/_components/findBar/FindBar.module.css";

export default function FindBar() {
  return (
    <div className={`${styles.find_bar_container}`}>
      <div className={`${styles.toLogin}`}>로그인</div>
      <div className={`${styles.find_id}`}>아이디찾기</div>
      <div className={`${styles.find_password}`}>비밀번호찾기</div>
    </div>
  );
}
