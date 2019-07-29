import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Category extends Component {

    render() {
        return (
            <ul className="nav flex-column">

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/add-category' className="nav-link">
                        <i className="material-icons">note_add</i>
                        <span>Add  Category</span>
                    </NavLink>
                </li>

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/view-Category' className="nav-link " >
                        <i className="material-icons">note_add</i>
                        <span>View Category</span>
                    </NavLink>
                </li>
            </ul>


        )
    }
}



export default Category
