import React, { useContext } from 'react';
import { Authcontext } from '../../Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location =  useLocation();

    if(loading)
    {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user)
    {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'>
            
        </Navigate>
    );
};

export default PrivateRoute;