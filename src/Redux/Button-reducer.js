const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

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
        default:
            return state;
    }
};

export const toggleButton = () => ({type: TOGGLE_BUTTON});

export default buttonReducer;