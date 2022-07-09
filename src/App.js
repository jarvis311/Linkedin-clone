import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';
import Widgets from './components/Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        // user is loggedin
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }else{
        //usser is logged out
        dispatch(logout());
      }
    })
  }, [])
  
  return (
    <div className="app">
      <Header/>
      {
        !user ? (<Login/>)
        :
        ( 
        <div className="app_content">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>)

        }
      
     
    </div>
  );
}

export default App;
