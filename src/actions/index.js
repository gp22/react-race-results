/*
 * action types
 */

export const ADD_CAPTURE = 'add_capture';

/*
 * action creators
 */

export function addCapture(data) {
  return { type: ADD_CAPTURE, payload: data };
};
