import * as React from 'react';
import './userDetail.scss';
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import usersStore from '../../store/users';
import Iuser from '../../models/Iuser';

export default function UserDetail() {
  const emptyUser: Iuser = {
    email: '',
  };
  const [user, setUser] = useState<Iuser>(emptyUser);
  const nav = useNavigate();

  useEffect(() => {
    let suscription = usersStore
      .SelectedUser()
      .getSelectedUser()
      .subscribe(setUser);
    return () => suscription.unsubscribe();
  }, [user]);

  function updateUser() {
    console.log(nav);
    nav('update', { state: { user: user } });
  }

  return (
    <section className="user-details">
      <div className="user-details__container">
        <h1 className="user-details__title">User details:</h1>
        <Link to="/" className="btn primary">
          Back to user List
        </Link>

        <button className="btn primary" onClick={updateUser}>
          Edit Information
        </button>
      </div>

      <ul className="user-details__list">
        <li>
          <img src={user.picture?.medium} alt="" />
        </li>
        <li>
          Name: {user.name?.first} {user?.name?.last}
        </li>
        <li>Email: {user?.email}</li>
        <li>Phone: {user?.phone}</li>
        <li>Gender: {user?.gender}</li>
        <li>
          Location: {user.location?.country} / {user.location?.city}
        </li>
      </ul>
      <Outlet />
    </section>
  );
}
