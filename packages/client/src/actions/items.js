export const ADD_ITEM = 'ADD_ITEM';

/* example sync action */
export const addItem = item => ({
  type: ADD_ITEM,
  payload: {
    item,
  },
});

/* example async action */
const asyncRequestMock = () => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 100);
});

export const addItemAsync = item => dispatch => asyncRequestMock()
  .then(() => dispatch(addItem(item)));
