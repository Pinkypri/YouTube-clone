import React from "react";
import style from "./Main.module.css";
import data from "./data.json";
import Item from "../Items/Items";
import {Grid} from '@material-ui/core'

const Main = () => {
  
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.header_options}>All</p>
        <p>Music</p>
        <p>Tamil Cinema</p>
        <p>Comedies</p>
        <p>Computer programming</p>
        <p>Mixes</p>
        <p>Love Songs</p>
        <p>Super Singer</p>
      </div>
      <Grid xs={12} container item justifyContent='center' className={style.card}>
        {data.map((item, index) => {
          return (
            <Item
            key={index}
              name={item.name}
              channelName={item.channelName}
              duration={item.duration}
              image={item.image}
              avatar={item.avatar}
              views={item.views}
              time={item.date}
            ></Item>
          );
        })}
      </Grid>
    </div>
  );
};

export default Main;