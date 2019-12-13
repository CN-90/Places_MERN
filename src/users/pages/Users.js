import React from 'react';
import UsersList from './../components/users-list/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Harry Potter',
      image:
        'https://images.pexels.com/photos/3233372/pexels-photo-3233372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
