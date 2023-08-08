import * as React from 'react';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import './UserUpdate.scss';

export default function UserUpdate() {

  const urlUser = useLocation();
  const [userData, setUserData] = useState(urlUser.state.user);
  console.log(userData)

  return (
    <form action="" className="user-update">
      <h2>Update User Info</h2>
      <div className="user-update__container">
        <div className="user-update__container-field">
          <label htmlFor="userName">User Name</label>
          <input id="userName" type="text" value={userData.name.first +' '+ userData.name.last} />
        </div>
        <div className="user-update__container-field">
          <label htmlFor="userEmail">User Email</label>
          <input id="userEmail" type="email" value={userData.email} />
        </div>
        <div className="user-update__container-field">
          <label htmlFor="userPhone">User Phone</label>
          <input id="userPhone" type="text" value={userData.phone} />
        </div>
        <div className="user-update__container-field">
          <label htmlFor="userGender">User Gender</label>
          <input id="userGender" type="text" value={userData.gender} />
        </div>
      </div>

      <button className="btn primary">
        update Info
      </button>
    </form>
  );
}
