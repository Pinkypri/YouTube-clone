
import React from "react";
import style from "./Sidebar.module.css";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  YouTube,
  WatchLater,
  ThumbUpAlt,
  ExpandMore,
  Theaters,
  SportsEsports,
  LiveTv,
  EmojiObjects,
  SportsBaseball,
  Settings,
  Flag,
  Help,
  Feedback,
  LocalFlorist,
  FiberManualRecord,

} from "@material-ui/icons";
import Menu from "../Menu/Menu";
import { Subscription} from "../Subscription/Subscription";

const Sidebar = () => {
  return (
    
    <div className={style.sidebar}>
      <Menu image={<Home/>} title="Home"/>
      <Menu image={<Explore/>} title="Explore"/>
      <Menu image={<Subscriptions/>} title="Subscriptions"/>
   
      <div className={style.line}></div>
      <Menu image={<VideoLibrary/>} title="Library"/>
      <Menu image={<History/>} title="History"/>
      <Menu image={<YouTube/>} title="Your videos"/>
      <Menu image={<WatchLater/>} title="WatchLater"/>
      <Menu image={<ThumbUpAlt/>} title="Liked videos"/>
      <Menu image={<ExpandMore/>} title="Show more"/>
    
      <div className={style.line}></div>
      <div>
        
        <h5 className={style.subcription}>SUBSCRIPTIONS</h5>
        <Subscription
          image="https://yt3.ggpht.com/ytc/AKedOLSJf_PYHF9czwJ0c99ARvsOkYLzoUGXSVhvOvlAkoc=s176-c-k-c0x00ffffff-no-rj-mo"
          title="BBC News"
          add={<FiberManualRecord className={style.Add}/>}
        />
        <Subscription
          image="https://yt3.ggpht.com/ytc/AKedOLQELSLiv93G8HnHj-xcDye-3VSliEDKtoxUefkPI3M=s176-c-k-c0x00ffffff-no-rj-mo"
          title="Vijay Television"
          
        />
        <Subscription
          image="https://yt3.ggpht.com/ytc/AKedOLRSu0SoelpGmqyAj7H-l9AvN_a4GiV145VwyF4yqA=s176-c-k-c0x00ffffff-no-rj-mo"
          title="Sony Music"
          add={<FiberManualRecord className={style.Add}/>}
        />
        <Subscription
          image="https://yt3.ggpht.com/ytc/AKedOLRFOA0wR7IzdrtkDpf6iHnX1l0efd_JI24gau0_=s176-c-k-c0x00ffffff-no-rj-mo"
          title="Colors TV"
          add={<FiberManualRecord className={style.Add}/>}
        />
        <Subscription
          image="https://yt3.ggpht.com/RepTvzW99y1lKDlGCAhQQzAh333D96QHzrrpBqMJ07uGqsXMUq8E-3Az5yZHWdIY1NUgOC7c=s176-c-k-c0x00ffffff-no-rj-mo"
          title="Hiphop Tamizha"
        />
        <Subscription
          image="https://yt3.ggpht.com/ytc/AKedOLTfEDGv-ChLg5MyVNfcvC3QXPQMzZA3jj-St9QRip0=s176-c-k-c0x00ffffff-no-rj-mo"
            title="Polimer News"
            add={<FiberManualRecord className={style.Add}/>}
        />
        <Subscription
          image="https://iconape.com/wp-content/png_logo_vector/content-4.png"
          title="Browse Channels"
  
        />
        <div className={style.expand}>
          <ExpandMore className={style.showmore}/>
          <p>Show 45 More</p>
        </div>
        <br/>
        <div className={style.line}></div>
        <div className={style.bottom}>
          <h5 className={style.sidebarmore}>MORE FROM YOUTUBE</h5>

          <Menu image={<YouTube/>} title="YouTube Premium"/>
          <Menu image={<Theaters/>} title="Movies"/>
          <Menu image={<SportsEsports/>} title="Gaming"/>
          <Menu image={<LiveTv/>} title="Live"/>
          <Menu image={<LocalFlorist></LocalFlorist>} title="Fashion & Beauty"/>
          <Menu image={<EmojiObjects/>} title="Learning"/>
          <Menu image={<SportsBaseball/>} title="Sports"/>
          
          <Menu image={<Settings/>} title="Settings"/>
          <Menu image={<Flag/>} title="Report history"/>
          <Menu image={<Help/>} title="Help"/>
          <Menu image={<Feedback/>} title="Send feedback"/>
        </div>
        <div className={style.line}></div>
        <br/>
        <div className={style.sidebar_info}>
        
           <p>About &nbsp; &nbsp;&nbsp;  Press  &nbsp; &nbsp;&nbsp;  Copyright</p>
           <p>Contact us  &nbsp; &nbsp;&nbsp; Creators</p>
           <p>Advertise  &nbsp; &nbsp;&nbsp; Developers</p>
           <br />
           <p>Terms &nbsp; &nbsp;&nbsp;  Privacy  Policy & Safety</p>
           <p>How YouTube works</p>
           <p>Test new features</p>
           <br />
            <span>© 2021 Google LLC</span>
        </div>
      </div>
</div>
 
  )
}

export default Sidebar