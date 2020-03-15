import { all, fork } from 'redux-saga/effects';
import { watchUsersRequests } from '../../users/redux/sagas';

export default function* () {
  yield all([fork(watchUsersRequests)]);
}
