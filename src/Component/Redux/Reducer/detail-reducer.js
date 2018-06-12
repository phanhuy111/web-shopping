export default function (state = {} , action) {
    switch (action.type) {
        case "ADD_TO_PRO": {
            return action.payload;
        }
        default: return state;
    }
}