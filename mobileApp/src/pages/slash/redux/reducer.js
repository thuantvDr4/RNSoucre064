// import * as types from "./actionTypes";

/*
*
* */
const defaultState = {

    }

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'initial':
            return {...state,  dashBoard_id: action.payload};


        default:
            return state;
    }

// END
}
