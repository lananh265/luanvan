// import React from "react";
// const Welcome = () => {
//   return (
//     <div>
//       <h3>Welcome !!!!!!</h3>
//     </div>
//   );
// }
// export default Welcome;


import React from "react";
import {Link} from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h3>Welcome</h3>
      <Link to="/" >Go to Login </Link>

      
    </div>
  );
}
export default Welcome;