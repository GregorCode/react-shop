import React from 'react';
import { Link } from 'react-router-dom';
/* import '../styles/NotFound.scss'; */

const NotFound = () => {
   return (
      <div className="NotFound">
         <img src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="Not Found" />
         <Link to="/">
            <h1>Return to Home</h1>
         </Link>
      </div>
   );
};

export default NotFound;