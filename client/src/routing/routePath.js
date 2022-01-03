import React from 'react';
import * as route from './routes';

export const homePage = {
    path: route.HOME_PAGE,
    component: React.lazy(()=> import('../components/HomePage'))
}

export const login = {
    path: route.LOGIN,
    component: React.lazy(()=> import('../components/LoginPage'))
}