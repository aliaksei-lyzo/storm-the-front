export const ADD_ITEM = 'ADD_ITEM';

/* example sync action */
export const addItem = item => ({
  type: ADD_ITEM,
  payload: {
    item,
  },
});

/* example async action */
export const addItemAsync = item => dispatch => setTimeout(() => {
  dispatch(addItem(item));
}, 1000);
