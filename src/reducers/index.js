import { combineReducers } from 'redux';
import { ADD_CAPTURE } from '../actions';
import { cloneDeep } from 'lodash';

function captureReducer(state = [], action) {
  switch (action.type) {
    case ADD_CAPTURE:
      var returnedState = cloneDeep(state);
      var hash = {};

      returnedState.forEach((el, i) => {
        if (el && el.hasOwnProperty('athlete')) {
          var name = el.athlete.name;

          if (!hash.hasOwnProperty(name)) {
            hash[name] = i;
          }
        }
      });

      action.payload.forEach(el => {
        if (el && el.hasOwnProperty('athlete')) {
          var name = el.athlete.name;

          if (!hash.hasOwnProperty(name)) {
            let athleteIndex = returnedState.push(el) - 1;
            hash[name] = athleteIndex;
          } else {
            returnedState[hash[name]].secondCapture = el;
          }
        }
      });

      return [
        ...returnedState,
      ];
    default:
      return state;
  }
}

export default combineReducers({
  captures: captureReducer
});
