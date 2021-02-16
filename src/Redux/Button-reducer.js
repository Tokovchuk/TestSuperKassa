import {buttonAPI} from "../API/ButtonAPI";

const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    isActive: false
};

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BUTTON: {
            return {
                ...state,
                isActive: !state.isActive
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const toggleButton = () => ({type: TOGGLE_BUTTON});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getStatus = () => {
    return (dispatch) => {
        buttonAPI.getStatus()
            .then(data => {
                dispatch(setStatus(data.status));
            })
    }
}

export const updateStatus = (status) => (dispatch) => {
    buttonAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}



export default buttonReducer;