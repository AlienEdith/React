import React from 'react'

import NewTaskForm from './NewTaskForm'
import SortForm from './SortForm'

class TaskBar extends React.Component{

    render(){
        return (
            <div className="row mr-1">
                <NewTaskForm />
                <SortForm />
            </div>
        )
    }
}

  
export default TaskBar;

