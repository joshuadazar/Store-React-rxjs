import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/userList/userList';
import UserDetails from './components/UserDetail/userDetail';
import './style.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/details" element={<UserDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
