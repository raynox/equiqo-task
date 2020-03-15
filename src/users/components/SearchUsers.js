import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import usersActions from '../redux/actions';
import SearchUsersList from './SearchUsersList';

const SearchUsers = () => {
  const items = useSelector((state) => state.users.searchedItems);
  const searching = useSelector((state) => state.users.searching);
  const dispatch = useDispatch();

  const searchUsers = (query) => {
    dispatch(usersActions.searchUsers(query));
  };

  return (
    <div className="w-50">
      <h2>Search users</h2>
      <Link to="/">
        <button>{'< Back to the list'}</button>
      </Link>

      <div className="mt1">
        <input
          onChange={(event) => searchUsers(event.target.value)}
          className="w-50"
          placeholder="Search by username..."
        />
      </div>

      <SearchUsersList items={items} searching={searching} />
    </div>
  );
};

export default SearchUsers;
