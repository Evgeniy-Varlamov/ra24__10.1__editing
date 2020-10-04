import {CHANGE_SERVICE_FIELD, ADD_SERVICE, UPDATE_SERVICE, EDIT_SERVICE, CANCEL_SERVICE} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const {name, value} = action.payload;
      return {...state, [name]: value};
    } case ADD_SERVICE: {
      return initialState;
    } case UPDATE_SERVICE: {
        return initialState;
    } case EDIT_SERVICE: {
      const {id, name, price} = action.payload;
      return {id, name, price};
    } case CANCEL_SERVICE: {
      return initialState;
    } default:
      return state;
  }
}
