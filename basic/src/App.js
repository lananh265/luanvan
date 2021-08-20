



// import Fetch from "./components/fetch";
// import Login from "./components/login";

// function App() {
//   return (
//     <>
    
//     <Login />
//     </>
//   );
// }

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import Products from "./pages"
// import Product from "./pages/product"

import Login from "./pages/login";
import Welcome from "./pages/welcome";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Login /></Route>
        <Route path="/welcome"><Welcome /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
    </Router>
  );
}

export default App;
