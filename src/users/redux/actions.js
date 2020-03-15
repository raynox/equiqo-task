const prefix = '@users/';

export const FETCH_USERS = `${prefix}FETCH_USERS`;
export const ADD_USERS = `${prefix}ADD_USERS`;
export const FETCH_USER = `${prefix}FETCH_USER`;
export const SET_USER = `${prefix}SET_USER`;
export const SET_QUERY = `${prefix}SET_QUERY`;
export const SET_LAST_ITEM = `${prefix}SET_LAST_ITEM`;
export const SEARCH_USERS = `${prefix}SEARCH_USERS`;
export const SET_SEARCHED_USERS = `${prefix}SET_SEARCHED_USERS`;
export const SET_SEARCHING = `${prefix}SET_SEARCHING`;

export default {
  fetchUsers: () => ({ type: FETCH_USERS }),
  fetchUser: (username) => ({ type: FETCH_USER, username }),
  setUser: (item) => ({ type: SET_USER, item }),
  addUsers: (items) => ({ type: ADD_USERS, items }),
  setQuery: (query) => ({ type: SET_QUERY, query }),
  setLastItem: (lastItem) => ({ type: SET_LAST_ITEM, lastItem }),
  searchUsers: (query) => ({ type: SEARCH_USERS, query }),
  setSearchUsers: (items) => ({ type: SET_SEARCHED_USERS, items }),
  setSearching: (searching) => ({ type: SET_SEARCHING, searching }),
};
