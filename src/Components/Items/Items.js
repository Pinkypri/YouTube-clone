import React from 'react'
import style from './Items.module.css'
import {Avatar} from '@material-ui/core'
import {FiberManualRecord} from '@material-ui/icons'

const Items = ({image,avatar,name,channelName,duration,views,date}) => {
    return (
        <div className={style.container}>
            <div className={style.items}>
            <img src={image} className={style.image} />
            <p className={style.time}>{date}</p>
            </div>
            
            <div className={style.title}>
                <Avatar src={avatar}/>
                <p>{name}</p>
            </div>
            <div className={style.date}>
                  <p>{channelName}</p>
                  <div className={style.views}>
                     <p>{views}</p>
                     <FiberManualRecord className={style.add}/>
                     <p>{duration}</p>
                  </div>
            </div>
        </div>
    )
}

export default Items;