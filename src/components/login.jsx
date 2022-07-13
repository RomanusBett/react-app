import React, {useState} from "react";
import httpClient from "./httpClient";




const LoginPage = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginUser = async () =>{
        console.log(email);

        try{
            await httpClient.post("https://carmateserver.herokuapp.com/login",{
                "email": email,
                "password": password,
            });
            // console.log(user.id);
            window.location.href = "/library";
        } catch(error){
            if(error.response.status === 401){
                alert("invalid credentials");
            }
        
        }
    };

    return(
        <div className="loginform1">
        <div className="loginform2">
        <h1>Login to your account</h1>
            <form className="login3form">
                <div className="formInput1">
                    <label>Email:</label>
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" /> 
                </div>
                <div className="formInput1">
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

        </div>
    );
};
export default LoginPage;
