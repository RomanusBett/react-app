import React, {useState} from "react";
import httpClient from "./httpClient";


const RegisterPage = ()=>{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const registerUser = async () =>{
        try{
             await httpClient.post("https://carmateserver.herokuapp.com/register", {
                "email": email,
                "password":password,
            })
            window.location.href = "/library";
        } catch( error ){
            if(error.response.status === 401){
                alert("Invalid credentials");
             
        }
    }
}

return (
  <div className="loginform1">
  <div className="loginform2">
  <h1>CREATE AN ACCOUNT</h1>
  <form className="login3form">
    <div className="formInput1">
      <label>Email: </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id=""
      />
    </div>
    <div className="formInput1">
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id=""
      />
    </div>
    <button type="button" onClick={() => registerUser()}>
      Submit
    </button>
  </form>
  </div>
  
</div>
  );
};
export default RegisterPage;