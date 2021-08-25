import React , { useState }  from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboars';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

import useToken from './useToken';

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
//    }
    
//    function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//    }
    
   function App() {
    const { token, setToken } = useToken();

     //const [token, setToken] = useState();
    // const token = getToken();
    if(!token) {
      return <Login setToken={setToken} />
    }
    const Logout = ()=>{
      localStorage.removeItem('token');
    }
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <button onClick ={()=>{Logout()}}>Log out</button>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
   }
    
   export default App;
   