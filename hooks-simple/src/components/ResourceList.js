import React, { useState, useEffect } from 'react';
import useResources from './useResources';


const ResourceList = (props) => {

    const resources = useResources(props.resource)

    return (
        <ul>
            {
                resources.map((resource => {
                    return <li>{resource.title}</li>
                }))
            }
        </ul>
  );
}

export default ResourceList;
