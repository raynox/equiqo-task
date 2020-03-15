import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions';

const UserDetails = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.item);

  React.useEffect(() => {
    dispatch(userActions.fetchUser(username));
  }, [username, dispatch]);

  if (!user) {
    return <div className="mt1">Loading...</div>;
  }

  return (
    <div className="mt1 w-50">
      <Link to="/">
        <button>{'< Back to the list'}</button>
      </Link>

      <div className="border pa1 mt1">
        <div className="flex items-center">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <p className="inline-block ml1">{user.login}</p>
        </div>
        <div className="mt1">
          <p className="block">
            <b>Name:</b>
            {' '}
            {user.name}
          </p>
          <p className="block">
            <b>Company:</b>
            {' '}
            {user.company}
          </p>
          <p className="block">
            <b>Location:</b>
            {' '}
            {user.location}
          </p>
        </div>
      </div>

    </div>
  );
};

export default UserDetails;
