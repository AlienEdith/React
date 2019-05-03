import React, { Component, useState } from 'react';
import ResourceList from './ResourceList'
import UserList from './UserList';
const App = () => {
  //     currentValue, function used when update the value and rerender
  const [resource, setResource] = useState('posts');
                      // react function, initial value assigned to resource
  // usually store one single piece data in each "resource", instead of a object            
  // For each data, call useState again, can call as many times as we want

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>  
        <button onClick={() => setResource('todos')}>Todos</button>  
      </div>
      <ResourceList resource={resource}/>
      <UserList />
    </div>
  );
  
}

export default App;
