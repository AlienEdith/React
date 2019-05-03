import React, { useState, useEffect } from 'react';
import useResources from './useResources';


const UserList = (props) => {

    const users = useResources("users")

    //check whether props.resource change!!!, if changed, rerun useEffect
    // if empty, run once! Must have this argument. otherwise, infinite loop
    
    return (
        <ul>
            {
                users.map((user => {
                    return <li key={user.id}>{user.name}</li>
                }))
            }
        </ul>
  );
}

export default UserList;
