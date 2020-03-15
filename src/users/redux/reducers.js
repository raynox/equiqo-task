import {
  ADD_USERS, SET_USER, SET_LAST_ITEM, SET_SEARCHED_USERS, SET_SEARCHING,
} from './actions';

const initialState = {
  items: [],
  item: null,
  lastItem: null,
  searchedItems: [],
  searching: false,
};

export default (state = initialState, {
  type, items, item, searching, lastItem,
}) => {
  switch (type) {
    case ADD_USERS: {
      return { ...state, items: state.items.concat(items) };
    }

    case SET_USER: {
      return { ...state, item };
    }

    case SET_LAST_ITEM: {
      return { ...state, lastItem };
    }

    case SET_SEARCHED_USERS: {
      return { ...state, searchedItems: items };
    }

    case SET_SEARCHING: {
      return { ...state, searching };
    }

    default: return state;
  }
};
