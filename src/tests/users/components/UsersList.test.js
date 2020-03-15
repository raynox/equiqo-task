import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import UsersList from '../../../users/components/UsersList';
import configureStore from '../../../base/redux/configureStore';
import { MemoryRouter } from 'react-router-dom';
import findByTestAttr from '../../utils/findByTestAttr';
import UsersListItem from '../../../users/components/UsersListItem';
import faker from 'faker';

describe('UserList', () => {

    it('should render users list', () => {

        const items = [
            {id: 1, login: faker.internet.userName(), avatar_url: faker.image.imageUrl()},
            {id: 2, login: faker.internet.userName(), avatar_url: faker.image.imageUrl()},
            {id: 3, login: faker.internet.userName(), avatar_url: faker.image.imageUrl()},
        ];

        const store = configureStore({
            users: {items}
        });

        const wrapper = mount(<Provider store={store}>
            <MemoryRouter>
                <UsersList />
            </MemoryRouter>
        </Provider>);

        const listItems = wrapper.find(UsersListItem);
        expect(listItems).toHaveLength(3);

        listItems.forEach((node, index) => {
            const avatar = findByTestAttr(node, 'avatar');
            const login = findByTestAttr(node, 'login');
            expect(login.text()).toEqual(items[index].login);
            expect(avatar.prop('src')).toEqual(items[index].avatar_url);
        });
    });

});