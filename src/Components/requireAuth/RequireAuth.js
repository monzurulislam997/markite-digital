import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import auth from "../../firebase.init"


const RequireAuth =({children})=>{
    const [user,loading]=useAuthState(auth)
     const location =useLocation()
    if(loading){
        return <h3>Loading</h3>
    }

    if(user){
        return children
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
}
export default RequireAuth;


//    import React, { useContext } from 'react';
//    import { Navigate, useLocation, navigate } from 'react-router-dom';
//    import { AuthContext } from '../../contexts/AuthProvider';
   
//    const PrivateRoute = ({children}) => {
//        const {user, loading} = useContext(AuthContext);
//        const location = useLocation();
   
//        if(loading){
//            return <progress className="progress w-56"></progress>
//        }
   
//        if (user){
//            return children;
//        }
   
//        return <Navigate to="/login" state={{from: location}} replace></Navigate>;
//    };
   
//    export default PrivateRoute;