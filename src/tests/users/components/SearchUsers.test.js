import React from 'react';
import { mount } from 'enzyme';
import SearchUsersList from '../../../users/components/SearchUsersList';
import SearchUsers from '../../../users/components/SearchUsers';
import findByTestAttr from '../../utils/findByTestAttr';
import faker from 'faker';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../../../base/redux/configureStore';

describe('SearchUsers', () => {

    it ('should render users list', () => {
        const store = createStore();

        const wrapper = mount(<Provider store={store}>
            <MemoryRouter>
                <SearchUsers />
            </MemoryRouter>
        </Provider>);

        const usersList = wrapper.find(SearchUsersList);
        const searchInput = findByTestAttr(wrapper, 'searchInput');
        const backLinkButton = findByTestAttr(wrapper, 'backLinkButton');

        expect(usersList.getDOMNode()).toBeVisible();
        expect(searchInput.getDOMNode()).toBeVisible();
        expect(backLinkButton.getDOMNode()).toBeVisible();
    });

});