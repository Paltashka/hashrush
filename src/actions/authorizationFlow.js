import axios from 'axios';

import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../types';

export function signIn(username, password) {
    return async dispatch => {
        try {
            const body = JSON.stringify({
                username: username.value,
                password: password.value,
            });

            const { data: { data } } = await axios.post(`${process.env.REACT_APP_ProdUrl}/login`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            localStorage.setItem('token', data.Token);

            dispatch({ type: SIGN_IN_SUCCESS, payload: { user: data.User, token: data.Token } });
        } catch (err) {
            return err;
        }
    };
}


export function signOut() {
    return async dispatch => {
        try {
            localStorage.removeItem('token');

            dispatch({ type: SIGN_OUT_SUCCESS });
        } catch (err) {
            return err;
        }
    };
}

export function signInByToken() {
    return async dispatch => {
        try {
            const { data: { data } } = await axios.post(`${process.env.REACT_APP_ProdUrl}/getUserByToken`, { token: localStorage.getItem('token') }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(data);

            dispatch({ type: SIGN_IN_SUCCESS, payload: { user: data.User, token: data.Token } });
        } catch (err) {
            return err;
        }
    };
}