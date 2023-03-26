import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth === true && authRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element}/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;