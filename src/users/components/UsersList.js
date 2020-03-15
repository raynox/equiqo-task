import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import usersActions from '../redux/actions';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);

  const loadFunc = (page) => dispatch(usersActions.fetchUsers());
  
  return (
    <div className="w-50" data-test="usersList">
      <h2>Users list</h2>

      <Link to="/search">
        <button>Search users</button>
      </Link>

      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {users && users.map((item) => <UsersListItem key={item.id} user={item} />)}
      </InfiniteScroll>
    </div>
  );
};

export default UsersList;
