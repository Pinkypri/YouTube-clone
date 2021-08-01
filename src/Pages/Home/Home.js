import React from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import styles from "../../App.module.css";
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import style from "./Home.module.css"


const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.app}>
       { !user ? (<Login/>):
       (
        <>
         <Header/>
         <div className={style.app_body}>
         <div className={style.sideBar}>
            <Sidebar/>
          </div>
           <div  className={style.main}>
           <Main/>
           </div>
           </div>
          
           </>
       )}
    </div>
)
};

export default Home;