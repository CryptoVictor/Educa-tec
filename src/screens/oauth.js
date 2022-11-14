import React from "react";

var mysql = require('mysql');

function AccountPage(props){

    window.userWalletAddress = null
    let walletAddress = "";

    const Verify = () => {

        var logged = localStorage.getItem("name");

        if (logged != undefined) {

            window.location.href = "/profile";
        } 
    }

    const mySql = () => {

        var name = document.getElementById("name").value
        var username = document.getElementById("username").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value

        if (name != "" & username != "" & email != "" & password != "") {

            var sql = mysql.createConnection({
                host: "https://sql10.freesqldatabase.com",
                user: "sql10565414",
                password: "sql10565414",
                database: "2DCXUulnqT",
                port: "3306"
            });

            sql = `INSERT INTO user (name = ${name}, username = ${username}, email = ${email}, password = ${password}) IF username = ${username} NOT EXISTS`;
            sql = mysql;
            var result = sql.error;

            if (result == undefined) {

                window.location.href = "/profile";
                localStorage.setItem("name", name);

            } else {

            sql = `SELECT id FROM user WHERE (name = ${name}, username = ${username}, email = ${email}, password = ${password}`;
            sql = mysql;
            result = sql.error;

            if (result == undefined) {

                window.location.href = "/profile";
                localStorage.setItem("name", name);
                
            } else {
                alert("Error, try again");
            }
            }

        } else {
            alert("Insira todos os dados requisitados!")
        }
    }

            const showAddress = (add) => {
                const str1 = add[0]+add[1]+add[2]+add[3]+add[4]+add[5];
                const str2 = add[add.length -3]+add[add.length-2]+add[add.length-1];
                return str1 + "..." + str2;
            }
      
            const connectWalletwithMetaMask = async() => {

              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
              .catch((e) => {
                var deleted = document.getElementById("btn")
                deleted.parentNode.removeChild(deleted)
  
                var here = document.getElementById("here")

                var button1 = document.createElement('button')
                button1.id = "btn1"
                button1.className = "btn btn-dark"
                button1.disabled = true
                button1.innerText = "Instale a Metamask"
                here.appendChild(button1)
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
        <div onLoad={Verify()} className="oauth-view rel">
            <center>
            <h1 className="s40 otitle fontb">Criar/Logar</h1>
            <br/>
            <div id="here">
                <button id="btn" class="btn btn-dark" onClick={() => connectWalletwithMetaMask()}>Conectar Carteira</button>
            </div>
            <br/>
            <div class="input-group mb-3">
                <input type="text" id="name" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" id="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" id="email" placeholder="drebas@gmail.com"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <br/>
            <label for="inputPassword5" class="form-label">Senha</label>
            <input type="password" id="password" placeholder="******" class="form-control" aria-describedby="passwordHelpBlock" />
            <br/>
                <button onClick={() => mySql()} id="ok" class="btn btn-danger">Entrar</button>
            </center>
        </div>
    )

}

export default AccountPage;