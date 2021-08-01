import React from 'react'
import style from './Menu.module.css'


const Menu = ({image,title}) => {
    
    
    return (

  
        <div className={style.menu} >
            
            <div className={style.menulist}>
                  <span className={style.image}>{image}</span>
                <p className={style.title}>{title}</p>
            </div>
        </div>
       
       
    )
}

export default Menu