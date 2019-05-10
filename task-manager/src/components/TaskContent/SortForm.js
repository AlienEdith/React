import React from 'react';
import { connect } from 'react-redux'

import { getTaskList } from '../../actions';

class SortForm extends React.Component{

    sortBy = "";
    completed = null;

    onSubmit = (event) => {
        event.preventDefault();
        // console.log(this.uncompleted)
        this.props.getTaskList(this.props.user.token, this.sortBy, this.completed)
    }

    render(){
        
        return (
            <form onChange={this.onSubmit} className="col-12 col-lg-5 mt-3">
                <div className="row align-items-center">
                    <div className="col-6 mx-auto">
                        <select className="custom-select"
                            onChange={(e) => this.sortBy = e.target.value}
                            defaultValue="time:asc">
                            <option value="time:asc">Deadline</option>
                            <option value="createdAt:asc">Created: Asc</option>
                            <option value="createdAt:desc">Created: Desc</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <select className="custom-select"
                            onChange={(e) => this.completed = e.target.value}
                        >
                            <option value="">All</option>
                            <option value="false">Uncompleted</option>
                            <option value="true">completed</option>
                        </select>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      user: state.user
    })
}

export default connect(mapStateToProps,{
    getTaskList
})(SortForm)