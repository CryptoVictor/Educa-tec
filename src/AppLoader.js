import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/educatec preto.png";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import AccountPage from "./screens/oauth";
import SiginPage from "./screens/sigin";
import TutorPage from "./screens/profiletutor";
import Profile from "./screens/profile";

import * as fire_base from "firebase";
global.firebase = fire_base;
global.fire = {
    ID: null
};
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);



export default function AppLoader(){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setIsFireUser(true);
          }else{
            console.log("You are guest...");
            setIsFireUser(false);
            setTimeout(()=>{
                context.setAppLoaded(true);
            }, 500);
          }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">      
                <div className="splash abs abc">
                    <img src={logo} alt="" className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App flex">      
                            <HashRouter>
                                <Sidebar />
                                <div className="app-content">
                                    <Route exact path="/" component={AccountPage} />
                                    <Route path="/home" component={HomePage} />
                                    <Route path="/course1" component={CoursePage} />
                                    <Route path="/discover" component={DiscoverPage} />
                                    <Route path="/categories" component={CategoriesPage} />
                                    <Route path="/oauth" component={AccountPage} />
                                    <Route path="/sigin" component={SiginPage} />
                                    <Route path="/profiletutor" component={TutorPage} />
                                    <Route path="/profile" component={Profile} />
                                </div>    
                            </HashRouter>    
                        </div>
                        : 
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}
