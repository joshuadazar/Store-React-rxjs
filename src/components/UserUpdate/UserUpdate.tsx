import * as React from 'react';

export default function UserUpdate() {
  return (
    <form action="">
      <h2>Update User Info</h2>
      <div className="user-update__container">
        <input id="userName" type="text" />
        <label htmlFor="userName">User Name</label>
        <input id="userEmail" type="text" />
        <label htmlFor="userEmail">User Email</label>
        <input id="userPhone" type="text" />
        <label htmlFor="userPhone">User Phone</label>
        <input id="userGender" type="text" />
        <label htmlFor="userGender">User Gender</label>
      </div>
    </form>
  );
}
