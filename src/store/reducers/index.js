
import {ADD_PROPERTY} from '../actions/index'
const root_reducer = (state = {}, action) => {
   switch (action.type) {
      case ADD_PROPERTY:
         return { ...state};
      default:
         return state;
   }
};

export default root_reducer;