import { all, takeEvery, put, select, throttle } from 'redux-saga/effects';
import usersActions, { FETCH_USERS, FETCH_USER, SEARCH_USERS } from './actions';
import request from '../../base/utils/request';

export function* handleFetchUsers() {
  try {
    const { users: { lastItem } } = yield select();
    const { data } = yield request(`https://api.github.com/users?since=${lastItem ? lastItem.id : 0}`);
    yield put(usersActions.addUsers(data));
    yield put(usersActions.setLastItem([...data].pop()));
  } catch (e) {
    // todo: log an error
    yield put(usersActions.addUsers([]));
  }
}

function* fetchUsers() {
  yield takeEvery(FETCH_USERS, handleFetchUsers);
}

export function* handleFetchUser({ username }) {
  try {
    yield put(usersActions.setUser(null));
    const { data } = yield request(`https://api.github.com/users/${username}`);
    yield put(usersActions.setUser(data));
  } catch (e) {
    // todo: log an error
    yield put(usersActions.setUser(null));
  }
}

function* fetchUser() {
  yield takeEvery(FETCH_USER, handleFetchUser);
}

export function* handleSearchUsers({ query }) {
  try {
    yield put(usersActions.setSearching(true));
    const { data } = yield request(`https://api.github.com/search/users?q=${query}`);
    yield put(usersActions.setSearchUsers(data.items));
    yield put(usersActions.setSearching(false));
  } catch (e) {
    // todo: log an error
    yield put(usersActions.setSearchUsers([]));
    yield put(usersActions.setSearching(false));
  }
}

function* searchUsers() {
  yield throttle(1000, SEARCH_USERS, handleSearchUsers);
}

export function* watchUsersRequests() {
  yield all([
    fetchUsers(),
    fetchUser(),
    searchUsers(),
  ]);
}
