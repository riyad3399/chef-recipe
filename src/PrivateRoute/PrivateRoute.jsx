import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;