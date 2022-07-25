import React, {useState} from "react";

const RegisterPage = ()=>{
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function isValidEmail() {
    return /\S+@\S+\.\S+/.test(email);
  }


  const handleChange = () => {
    if (!isValidEmail(email)) {
      alert('Email is invalid');
    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTv42i6dYMpWZGYiogDxi5TBUEjVahLhY',
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
            console.log(data);
          })
        }
      })
    }
  };
  

return (
  <div className="loginform1">
  <div className="loginform2">
  <form className="login3form">
    <h1>CREATE AN ACCOUNT</h1>

    <div className="formInput1">
      <label>Email: </label>
      <input
        type="text"
        onChange={e => setEmail(e.target.value)}
        id=""
      />
    </div>
    <div className="formInput1">
      <label>Password: </label>
      <input
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        id=""
      />
    </div>
    <button className="submitbutton" type="button" onClick={e=>handleChange()}>
      SUBMIT
    </button>
    <a href="/login">Already have an account?</a>
  </form>
  </div>
  
</div>
  );
};
export default RegisterPage;