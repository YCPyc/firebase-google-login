import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/firebase"
import $ from 'jquery';

export default function NavBar(props) {
  const authentication = getAuth(app);
  onAuthStateChanged(authentication,(user)=>{
    if(user){
      $('#auth-text').text("Log Out");
    }
    else{
      $('#auth-text').text("Log In");
    }
  })

  const signInWithGoogle = () =>{
    
      if(props.userStatus==false){
       
        const provider = new GoogleAuthProvider();
        signInWithRedirect(authentication, provider)
        .then((res)=>{
        
          console.log(res);
         
        })
        .catch((err)=>{
            console.log(err)
        })
      }
      else{
          signOut(authentication).then(() => {
            $('#auth-text').text("Log In");
          }).catch((error) => {
            console.log(error)
          });
             
      }
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firebase
          </Typography>
          <Button color="inherit" onClick={signInWithGoogle} id="auth-text">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }

