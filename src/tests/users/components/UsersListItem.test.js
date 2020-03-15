import React from 'react';
import { shallow } from 'enzyme';
import UsersListItem from '../../../users/components/UsersListItem';
import faker from 'faker';

describe('UsersListItem', () => {

    it('should render user data', () => {

        const user = {
            login: faker.internet.userName(),
            avatar_url: faker.image.imageUrl(),
        };

        const component = shallow(<UsersListItem user={user} />);
        const image = component.find('img');
        const login = component.find('p').first();

        expect(image.prop('src')).toEqual(user.avatar_url);
        expect(login.text()).toEqual(user.login);
    });

});