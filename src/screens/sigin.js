import React, {useState, useEffect} from "react";
import input from 'react-bootstrap';

import {
    NavLink,    
} from "react-router-dom";

var mysql = require('mysql');

function SiginPage(props){

    window.userWalletAddress = null
    let walletAddress = "";

    function mySql() {

        var name = document.getElementById("name")
        var username = document.getElementById("username")
        var email = document.getElementById("email")
        var age = document.getElementById("age")
        var gender = document.getElementById("gender")
        var password = document.getElementById("password")

        var con = mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: ""
        });

        con.connect(function(err) {
            if (err) throw err;
            var sql = `INSERT INTO user (name = ${name}, username = ${username}, email = ${email}, age = ${age} gender = ${gender} password = ${password})`;
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log(result.affectedRows + " record(s) updated");
            });
          });
    }

            function showAddress(add){
                const str1 = add[0]+add[1]+add[2]+add[3]+add[4]+add[5];
                const str2 = add[add.length -3]+add[add.length-2]+add[add.length-1];
                return str1 + "..." + str2;
            }
      
            async function connectWalletwithMetaMask() {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                .catch((e) => {
                console.error(e.message)
                return
                })
        
                if (!accounts) { return }
  
                var deleted = document.getElementById("btn")
                deleted.parentNode.removeChild(deleted)
  
                var here = document.getElementById("here")
  
                window.userWalletAddress = accounts[0]
                let walletAddress = showAddress(window.userWalletAddress)
  
                var button1 = document.createElement('button')
                button1.id = "btn1"
                button1.className = "btn btn-dark"
                button1.disabled = true
                button1.innerText = walletAddress
  
                here.appendChild(button1)
              }
    return (
        <div className="oauth-view rel">
            <center>
            <h1 className="s40 otitle fontb">Sign In</h1>
            <br/>
            <div id="here">
                <button id="btn" class="btn btn-dark" onclick={connectWalletwithMetaMask()}>Connect Wallet</button>
            </div>
            <br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" id="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input type="text" id="name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" id="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <br/>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Age</label>
                <select id="age" class="form-select">
                    <option selected>Choose...</option>
                    <option value="1">Greater than 18</option>
                    <option value="2">Lower than 18</option>
                    <option value="3">Prefer not answer</option>
                </select>
            </div>
            <br/>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Gender</label>
                <select id="gender" class="form-select">
                    <option selected>Choose...</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Prefer not answer</option>
                </select>
            </div>
            <br/>
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlock" />
            <br/>
            <NavLink to={"oauth"} className={"aic link noul"}>
                <button class="btn btn-danger">Login</button>
            </NavLink>
            <span>&nbsp;&nbsp;</span>
            <NavLink to={"oauth"} className={"aic link noul"}>
                <button class="btn btn-danger">Sign In</button>
            </NavLink>
            </center>
        </div>
    )

}

export default SiginPage;