import moxios from 'moxios';
import faker from 'faker';
import { runSaga } from 'redux-saga';
import { handleFetchUsers, handleFetchUser, handleSearchUsers } from '../../../users/redux/sagas';
import usersActions from '../../../users/redux/actions';

describe('users sagas', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('fetchUsers saga sets users and last item in store', async () => {

        const mockedUsers = [
            { id: 1, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
            { id: 2, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
            { id: 3, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
        ];

        const dispatchedActions = [];

        const fakeStore = {
            getState: () => ({ users: { items: [] } }),
            dispatch: action => dispatchedActions.push(action),
        }

        moxios.stubRequest('https://api.github.com/users?since=0', {
            status: 200,
            response: mockedUsers,
        });

        await runSaga(fakeStore, handleFetchUsers).toPromise();
        expect(dispatchedActions).toContainEqual(usersActions.addUsers(mockedUsers));
        expect(dispatchedActions).toContainEqual(usersActions.setLastItem([...mockedUsers].pop()));
    });

    test('fetchUser saga sets user in store', async () => {

        const dispatchedActions = [];
        const mockedUser = { id: 1, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() };
        const fakeStore = {
            getState: () => ({ users: { item: null } }),
            dispatch: action => dispatchedActions.push(action),
        }

        moxios.stubRequest(`https://api.github.com/users/${mockedUser.login}`, {
            status: 200,
            response: mockedUser,
        });

        await runSaga(fakeStore, handleFetchUser, { username: mockedUser.login }).toPromise();
        expect(dispatchedActions).toContainEqual(usersActions.setUser(mockedUser));
    });

    test('searchUsers should sets searched users in store', async () => {
        const dispatchedActions = [];

        const mockedUsers = [
            { id: 1, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
            { id: 2, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
            { id: 3, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
        ];

        const fakeStore = {
            getState: () => ({ users: { searchedItems: [] } }),
            dispatch: action => dispatchedActions.push(action),
        }
        const query = 'query';

        moxios.stubRequest(`https://api.github.com/search/users?q=${query}`, {
            status: 200,
            response: {items: mockedUsers},
        });

        await runSaga(fakeStore, handleSearchUsers, { query }).toPromise();
        expect(dispatchedActions).toContainEqual(usersActions.setSearchUsers(mockedUsers));
    });

});