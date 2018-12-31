export const ADD_ITEM = 'ADD_ITEM';


export const addItem = item => ({
  type: ADD_ITEM,
  payload: {
    item,
  },
});

export const addItemAsync = item => dispatch => setTimeout(() => {
  dispatch(addItem(item));
}, 1000);
