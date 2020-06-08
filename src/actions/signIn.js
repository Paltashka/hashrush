import axios from 'axios';

import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../types'

export function signIn(username, password) {
    return async dispatch => {
        try {
            const data = JSON.stringify({
                username: username.value,
                password: password.value,
            });

            const response = await axios.post('https://hashrush.com:3002/login', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({ type: SIGN_IN_SUCCESS, payload: response.data.data.User });
        } catch (err) {
            alert('email or password are incorrect');
            return err;
        }
    };
}


export function signOut() {
    return async dispatch => {
        try {
            dispatch({ type: SIGN_OUT_SUCCESS });
        } catch (err) {
            return err;
        }
    };
}