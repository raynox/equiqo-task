import React from 'react';
import { mount } from 'enzyme';
import SearchUsersList from '../../../users/components/SearchUsersList';
import UsersListItem from '../../../users/components/UsersListItem';
import findByTestAttr from '../../utils/findByTestAttr';
import faker from 'faker';
import { MemoryRouter } from 'react-router-dom';

describe('SearchUsersList', () => {

    it('should show no records message when users list is empty', () => {
        const wrapper = mount(<SearchUsersList />);

        const noRecordsText = findByTestAttr(wrapper, 'noRecordsText');
        expect(noRecordsText.getDOMNode()).toBeVisible();
    });

    it('should render users records', () => {

        const mockedUsers = [
            { id: 1, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
            { id: 2, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
            { id: 3, login: faker.internet.userName(), avatar_url: faker.image.imageUrl() },
        ];

        const wrapper = mount(<MemoryRouter>
            <SearchUsersList items={mockedUsers} />
        </MemoryRouter>);
        const items = wrapper.find(UsersListItem);

        expect(items).toHaveLength(3);
        items.forEach((node, index) => {
            const avatar = findByTestAttr(node, 'avatar');
            const login = findByTestAttr(node, 'login');
            expect(login.text()).toEqual(mockedUsers[index].login);
            expect(avatar.prop('src')).toEqual(mockedUsers[index].avatar_url);
        });
    });

    it('should show message when searching is in progress', () => {
        const wrapper = mount(<SearchUsersList searching />);

        const searchingText = findByTestAttr(wrapper, 'searching');
        expect(searchingText.getDOMNode()).toBeVisible();
        expect(searchingText.text()).toEqual('Searching...');
    });
});
