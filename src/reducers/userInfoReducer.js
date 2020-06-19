import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../types';

const emptyStore = {
    Name: '',
    Id: '',
    Email: '',
    Token: ''
}

const initStore = {
    ...emptyStore
};

export default function reducer(store = initStore, { type, payload }) {
    switch (type) {
        case SIGN_IN_SUCCESS: {
            return {
                ...store,
                ...payload.user,
                token: payload.token
            };
        }

        case SIGN_OUT_SUCCESS: {
            return emptyStore
        }

        default:
            return store;
    }
}