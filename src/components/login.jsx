import React, {useState} from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';



const LoginPage = ()=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function loginUser(){
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTv42i6dYMpWZGYiogDxi5TBUEjVahLhY',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(response => {
            if(response.ok){
                window.location.href = '/library';
            }
            else{
                return response.json().then(data =>{
                    alert(data.error.message);
                })
            }
        })
    }


    return(
        <div className="loginform1">
        <div className="loginform2">
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
            <form className="login3form">
                <LockRoundedIcon fontSize="large"  sx={{color:'#F77E21'}} /> 
                <div className="formInput1">
                    <label>Email:</label>
                    <input
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    id="email" /> 
                </div>
                <div className="formInput1">
                    <label>password:</label>
                    <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    id="" />  
                </div>
                    <button className="submitbutton" type="button" onClick={e=>loginUser()}>Submit</button>
                    <a href="/register">Don't have an account? Sign up</a>
            </form>
        </div>

        </div>
    );
};
export default LoginPage;
