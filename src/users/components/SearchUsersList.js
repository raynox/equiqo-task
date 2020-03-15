import React from 'react';
import UsersListItem from './UsersListItem';
import PropTypes from 'prop-types';

const SearchUsersList = ({ items = [], searching = false }) => {
  if (searching) {
    return <div className="mt1" data-test="searching">Searching...</div>;
  }

  return (
    <div>
      {!items.length && <div className="mt1" data-test="noRecordsText">No records, fill in username to search</div>}
      {!!items.length && items.map((item) => <UsersListItem key={item.id} user={item} />)}
    </div>
  );
};

SearchUsersList.propTypes = {
    items: PropTypes.array,
    searching: PropTypes.bool,
}

export default SearchUsersList;
