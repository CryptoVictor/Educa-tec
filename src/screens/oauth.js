import React, {useState, useEffect} from "react";

import {
    NavLink,    
} from "react-router-dom";

var mysql = require('mysql');

function AccountPage(props){

    window.userWalletAddress = null
    let walletAddress = "";
    var one = 0;
    var two = 0;

    function mySql() {

        one++;

        if(one > 1){

        var username = document.getElementById("username")
        var email = document.getElementById("email")
        var password = document.getElementById("password")

        var con = mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: ""
        });

        con.connect(function(err) {
            if (err) throw err;
            var sql = `SELECT id FROM user WHERE username = ${username}`;
            con.query(sql, function (err, result) {
              if (err == true) {
                console.log(err);
              }else{
                console.log(result.affectedRows);
              }
            });
          });
        }

        one = 0;
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
            <h1 className="s40 otitle fontb">Login</h1>
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
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" id="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <br/>
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlock" />
            <br/>
            <NavLink to={"oauth"} className={"aic link noul"}>
                <button class="btn btn-danger">Login</button>
            </NavLink>
            <span>&nbsp;&nbsp;</span>
            <NavLink to={"sigin"} className={"aic link noul"}>
                <button class="btn btn-danger">Sign In</button>
            </NavLink>
            </center>
        </div>
    )

}

export default AccountPage;