import { useState } from "react";
import styles from "./sidebar.module.css";
  
  type NavigationState = {
    [key: string]: boolean;
  };
export default function Sidebar(){
    const [dropdownStates, setDropdownStates] = useState<NavigationState>({
        nav1: false,
        nav2: false,
        nav3: false,
        nav4: false,
        nav5: false,
      });

      const toggleDropdown = (nav:string) => {
        const newDropdownStates = Object.keys(dropdownStates).reduce((acc, key) => {
            acc[key] = key === nav ? !dropdownStates[key] : false;
            return acc;
        }, {} as NavigationState);

        setDropdownStates({
          ...newDropdownStates,
          [nav]: !dropdownStates[nav],
        });
      };
    return(
        <div className={styles.main}>
            <div className={styles.logo}>
            <label className={styles.loginTitleColor1}>Min</label>
            <label className={styles.loginTitleColor2}>clod</label>
            </div>

            <div className={styles.navigationContainer}>
            <div onClick={() => toggleDropdown('nav1')} className={styles.navItem}>
                <label className={styles.mainNav}>네비게이션 1 {'>'}</label>
            </div>
            <ol className={dropdownStates.nav1 ? styles.dropdownOpen : styles.dropdownClosed}>
                <li className={styles.childNav}>네비게이션 1-1</li>
                <li className={styles.childNav}>네비게이션 1-2</li>
                <li className={styles.childNav}>네비게이션 1-3</li>
            </ol>

            <div onClick={() => toggleDropdown('nav2')} className={styles.navItem}>
            <label className={styles.mainNav}>네비게이션 2 {'>'}</label>
            </div>
            <ol className={dropdownStates.nav2 ? styles.dropdownOpen : styles.dropdownClosed}>
                <li className={styles.childNav}>네비게이션 2-1</li>
                <li className={styles.childNav}>네비게이션 2-2</li>
                <li className={styles.childNav}>네비게이션 2-3</li>
            </ol>

            <div onClick={() => toggleDropdown('nav3')} className={styles.navItem}>
            <label className={styles.mainNav}>네비게이션 3 {'>'}</label>
            </div>
            <ol className={dropdownStates.nav3 ? styles.dropdownOpen : styles.dropdownClosed}>
                <li className={styles.childNav}>네비게이션 3-1</li>
                <li className={styles.childNav}>네비게이션 3-2</li>
                <li className={styles.childNav}>네비게이션 3-3</li>
            </ol>

            <div onClick={() => toggleDropdown('nav4')} className={styles.navItem}>
            <label className={styles.mainNav}>네비게이션 4 {'>'}</label>
            </div>
            <ol className={dropdownStates.nav4 ? styles.dropdownOpen : styles.dropdownClosed}>
                <li className={styles.childNav}>네비게이션 4-1</li>
                <li className={styles.childNav}>네비게이션 4-2</li>
                <li className={styles.childNav}>네비게이션 4-3</li>
            </ol>

            <div onClick={() => toggleDropdown('nav5')} className={styles.navItem}>
            <label className={styles.mainNav}>네비게이션 5 {'>'}</label>
            </div>
            <ol className={dropdownStates.nav5 ? styles.dropdownOpen : styles.dropdownClosed}>
                <li className={styles.childNav}>네비게이션 5-1</li>
                <li className={styles.childNav}>네비게이션 5-2</li>
                <li className={styles.childNav}>네비게이션 5-3</li>
            </ol>
            </div>

            <div className={styles.bottomSidebar}>
                <div>
                </div>
                <div className={styles.BtnContainer}>
                <button className={styles.loginBtn}>
                로그인/회원가입
                </button>
                </div>
            </div>
        </div>
    )
}