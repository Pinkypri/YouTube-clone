import React from 'react'
import {
   Menu,
   Search,
   Mic,
   Apps,
   Notifications,
   VideoCall
} from "@material-ui/icons"
import {Avatar} from "@material-ui/core"
import {useSelector} from "react-redux"
import style from"./Header.module.css"
const Header = () => {
    const {user} = useSelector((state) => state.user);
  

    return (
     
        <div className={style.header}>
        <div className={style.header_left}>
        <Menu/>
      <img src="https://i.pinimg.com/originals/f0/8a/7e/f08a7e7d998f29812bb9149a0e9bf2d1.jpg"
       alt="logo" className={style.header_img} />
        </div>
      <div className={style.header_center}> 
      <div className={style.centerInfo}>
        <input type="text" className={style.header_input}/>
        <Search className={style.centerSearch} fontSize="small"/>
      </div>
      <Mic/>
      </div>
      <div className={style.header_right}>
      <VideoCall />
      <Apps/>
      <Notifications/>
      <Avatar src={user.photoURL} className={style.avatar}/>
      </div>
     
    </div>
    );
};

export default Header
