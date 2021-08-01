import React from 'react'
import style from './Subscription.module.css'
import {Avatar} from '@material-ui/core'


export const Subscription = ({image,title,add}) => {
    return (
        <div className={style.subscription}>
            <Avatar src={image} className={style.avatar}/>
            <p>{title}</p>
            <p className={style.Add}>{add}</p>
        </div>
    )
}
