import React from 'react';
import { mount } from 'enzyme';
import UserDetails from '../../../users/components/UserDetails';
import findByTestAttr from '../../utils/findByTestAttr';
import faker from 'faker';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../base/redux/configureStore';

describe('UserDetails', () => {

    it('should render user details', () => {

        const item = {
            login: faker.internet.userName(),
            avatar_url: faker.image.imageUrl(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            location: faker.address.city(),
        };

        const store = configureStore({users: {item}});

        const wrapper = mount(<Provider store={store}>
            <MemoryRouter>
                <UserDetails />
            </MemoryRouter>
        </Provider>);

        const login = findByTestAttr(wrapper, 'login');
        const avatar = findByTestAttr(wrapper, 'avatar');
        const name = findByTestAttr(wrapper, 'name');
        const company = findByTestAttr(wrapper, 'company');
        const location = findByTestAttr(wrapper, 'location');

        expect(login.text()).toEqual(item.login);
        expect(avatar.prop('src')).toEqual(item.avatar_url);
        expect(name.text()).toEqual(item.name);
        expect(company.text()).toEqual(item.company);
        expect(location.text()).toEqual(item.location);
    });

});