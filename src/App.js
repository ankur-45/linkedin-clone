import React from "react";
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Widget from './Widget';
import Feed from './Feed';
import Login from './Login';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is lgged in
        dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">



      {/* Header */}
      <Header /> 
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widget />
        </div>
      )}
              
    </div>
  );
}

export default App;
