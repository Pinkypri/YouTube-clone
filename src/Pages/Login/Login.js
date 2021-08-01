import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/actions/user";
import styles from "./Login.module.css"

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>{
  
      dispatch(addUser(result))})
      
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.login}>
    <div className={styles.login_logo}>
  
      <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
       alt="youTube-font" />
       </div>
      <Button  onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;