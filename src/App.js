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
import MyPosts from "./Pages/MyPosts/my-posts";

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
  //   if (localStorage.getItem("uid") != null) {
  //     db.collection("profiles")
  //       .doc(localStorage.getItem("uid"))
  //       .onSnapshot((doc) => {
  //         // var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
  //         dispatch(setProfileRealTime(doc.data()));
  //       });
  //   }
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("uid") != null) {
      const uid = localStorage.getItem("uid");
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
        <Router exact path="/myposts">
          <MyPosts/>
        </Router>
      </Switch>
    </Fragment>
  );
}

export default App;
