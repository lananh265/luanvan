
import Login from "./Login";
import About from "./About";
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function GetToken(){
  const token = localStorage.getItem('token')
  const UserToken = JSON.parse(token)
  return UserToken?.token
}
export default function App (){
  const [token, setToken] = useState(GetToken())
  // const dangXuat = ()=>{
  //   localStorage.removeItem("token");
  // }

  const dangXuat = ()=>{
     localStorage.removeItem("token");
     // setToken(false)
     window.location.href = '/';
   }

  if(!token){
    return <Login thayDoiToken = {setToken} />
  }

  return (
    <div>
    <Router>
    <h1>App</h1>
    <Link to="/About">About</Link>
    <Switch>
               <Route path="/login">
               <Login />
               </Route>
               <Route path="/about">
               <About />
               </Route>
           </Switch>
<button onClick={()=>{dangXuat()}}>Logout</button>
       </Router>
    </div>
  )
}
