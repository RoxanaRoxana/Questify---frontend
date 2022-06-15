// import React from 'react';
// import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
//   const { token } = useSelector((state) => state.users);
    // const location = useLocation();
    
    return (
       children
    )

//   return !token ? (
//     <Navigate to="/login" replace state={{ from: location }} />
//   ) : (
//     children
//   );
}

export default PrivateRoute
