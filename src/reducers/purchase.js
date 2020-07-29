import {RECEIVE_XSOLLA_ACCESS_TOKEN} from '../types';

const initialState = {
    accessToken: '',
};

export default function reducer(state = initialState, {type, payload}) {
    switch(type) {
        case RECEIVE_XSOLLA_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: payload,
            }
        default:
            return state;
    }
}
