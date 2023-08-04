import './userList.scss';
import * as React from 'react';
import { useState, useEffect } from 'react';
import usersStore from '../../store/users';
import { Link } from 'react-router-dom';
import Iuser from '../../models/Iuser';

export default function UserList() {
  const [{ loading, users }, setUsers] = useState(usersStore.initialState);

  useEffect(() => {
    const subscription = usersStore.subscribe(setUsers);
    return () => subscription.unsubscribe();
  }, []);

  const setUsersLimit = (event) => {
    usersStore.setLimitUsers(event.target.value);
  };

  const SetSelectedUser = (user: Iuser)=> {
    usersStore.SelectedUser().setSelectedUser(user);
  }

  return (
    <div className="user-list">
      <h1 className="user-list__title">Users:</h1>
      <select name="userLimit" id="userLimit" onChange={setUsersLimit}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="user-list__list">
          {users.map((user) => (
            <Link
              className="user-list__list-item"
              key={user.email}
              onClick={()=>SetSelectedUser(user)}
              to={`/details`}
            >
              {user.name.first}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
