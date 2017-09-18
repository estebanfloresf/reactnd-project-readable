import {combineReducers} from 'redux'

import {
    ORDER_BY,
    GET_ALL_POST

} from '../actions'

const posts = {};

function orderBy(state = {}, action) {

    switch (action.type) {
        case ORDER_BY:
            const {label} = action;
            return {
                ...state,
                [label.order]: label
            };
        default:
            return state;
    }

}

function Posts(state=posts,action){

    const { post } = action;

    switch (action.type){
        case GET_ALL_POST:
            return{
                ...state,
                [post]: post
            };
        default:
            return state
    }
}


//
// function food (state = {}, action) {
//   switch (action.type) {
//     case ADD_RECIPE :
//       const { recipe } = action
//
//       return {
//         ...state,
//         [recipe.label]: recipe,
//       }
//     default :
//       return state
//   }
// }

// const initialCalendarState = {
//   sunday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
//   monday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
//   tuesday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
//   wednesday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
//   thursday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
//   friday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
//   saturday: {
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//   },
// }
//
// function calendar (state = initialCalendarState, action) {
//   const { day, recipe, meal } = action
//
//   switch (action.type) {
//     case ADD_RECIPE :
//       return {
//         ...state,
//         [day]: {
//           ...state[day],
//           [meal]: recipe.label,
//         }
//       }
//     case REMOVE_FROM_CALENDAR :
//       return {
//         ...state,
//         [day]: {
//           ...state[day],
//           [meal]: null,
//         }
//       }
//     default :
//       return state
//   }
// }
//
export default combineReducers({
    orderBy,
    Posts

})