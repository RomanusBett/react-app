import React from "react";
// import httpClient from "./httpClient";

const Library = ()=>{
    // const[user, setUser] = useState('');
    
    // const logoutUser = async ()=>{
    //     await httpClient.post("https://carmateserver.herokuapp.com/logout");
    //     window.location.href = "/";
    // };

    // useEffect(()=>{
    //     (async ()=>{
    //         try{
    //             const resp = await httpClient.get("https://carmateserver.herokuapp.com/@me")
    //             setUser(resp.data)
    //         } catch(error){
    //             console.log(error);
    //         }
    //     })();
    // }, []);

    return (
        <div>
          <h1>CarMATE</h1>
          {/* {user != null ? (
            <div>
              <h2>Logged in</h2>
              <h3>ID: {user.id}</h3>
              <h3>Email: {user.email}</h3>
    
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div>
              <p>You are not logged in</p>
              <div>
                <a href="/login">
                  <button>Login</button>
                </a>
                <a href="/register">
                  <button>Register</button>
                </a>
              </div>
            </div>
          )} */}
        </div>
      );
    };

export default Library;