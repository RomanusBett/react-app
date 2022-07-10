import React, {useState} from "react";
import httpClient from "./httpClient";

const LoginPage = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async () =>{
        console.log(email, password);

        try{
            await httpClient.post("https://carmateserver.herokuapp.com/login",{
                "email": email,
                "password": password,
            });
            window.location.href = "/library";
        } catch(error){
            if(error.response.status === 401){
                alert("invalid credentials");
            }
        
        }
    };
    return(
        <div>
            <h1>Log Into Your Account</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" /> 
                    </div>
                    <div>
                    <label>password:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="" />  
                    </div>
                    <button type="button" onClick={()=> loginUser()}>Submit</button>
            </form>
        </div>
    );
};
export default LoginPage
