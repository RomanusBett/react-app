import React, {useState, useContext} from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AuthContext from "../store/auth-context";



const LoginPage = ()=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [buttonText, setButtonText] = useState('SUBMIT');

    const authCtx = useContext(AuthContext);

    function loginUser(){
        setButtonText('loading...');
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
                return response.json();
            }
            else{
                return response.json().then(data =>{
                    let errorMessage = 'Authentication failed! password should be longer than 8 characters or error: Invalid email format';
                    throw new Error(errorMessage);
                })
            }
        }).then((data) => {  
            const expirationTime = new Date(new Date().getTime()+ (+data.expiresIn*1000));
       
            authCtx.login(data.idToken, expirationTime.toISOString());
            window.location.replace('/library');
        }).catch((err)=>{
            alert(err.message);
        });
        
    }


    return(
        <div className="loginform1">
        <div className="loginform2">
            <form className="login3form">
            <h1>SIGN IN TO YOUR ACCOUNT</h1>   
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
                    minLength="7"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    id="" />  
                </div>
                    <button className="submitbutton" type="button" onClick={e=>loginUser()}>{buttonText}</button>
                    <a href="/register">Don't have an account? Sign up</a>
            </form>
        </div>

        </div>
    );
};
export default LoginPage;
