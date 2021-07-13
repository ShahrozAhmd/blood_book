import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import Landing from "./Pages/LandingPage/landing";
import Profile from "./Pages/Profile/profile";
import { firebaseAuth, db } from "./config/firebase_config";
import { authStateObserver } from "./store/actions/auth_action";
import { useDispatch, useSelector } from "react-redux";
import {
  setProfileRealTime,
  loadProfileOnRefresh,
} from "./store/actions/profile_actions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authentication);
  // this useState us dedicated to ensure that the user has logged in or logged out to the site, its firebase observer.
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      let myUser = null;
      if (user) {
        myUser = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          refreshToken: user.refreshToken,
          accessToken: user.accessToken,
          expirationTime: user.expirationTime,
        };
      }
      dispatch(authStateObserver(myUser));
    });
  }, [state.isSignIn, state.isSignOut]);

  // this is a realtime listner for our profile data, it listen evry changes in our profile
  // document in firestore and update the global local store
  // useEffect(() => {
  //   // console.log(auth.uid)
  //   db.collection("profiles")
  //     .doc(state.authData.uid)
  //     .onSnapshot((doc) => {
  //       console.log(doc.data());
  //       dispatch(setProfileRealTime(doc.data()));
  //     });
  // }, []);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      dispatch(loadProfileOnRefresh(uid));
    }
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
