import initialState from './initialState';
export default function (state = initialState.products , action) {
    switch (action.type) {
        case "ADD_TO_PRO": {
            return action.payload;
        }
        default: return state;
    }
}