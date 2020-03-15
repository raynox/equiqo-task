import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UsersListItem = ({ user }) => {
    return <Link to={`/users/${user.login}`}>
        <div className="users-list-item mv1 border pa1 flex items-center">
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <p className="inline-block ml1">{user.login}</p>
            <p className="ml-auto">&gt;</p>
        </div>
    </Link>
};

UsersListItem.propTypes = {
    user: PropTypes.object,
}

export default UsersListItem;
