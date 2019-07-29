import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

class RoleDropdown extends Component {

    render() {
        return (
            <ul className="nav flex-column">

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/add-admin'>
                        <Link to='/add-admin' className="nav-link">
                            <i className="material-icons">note_add</i>
                            <span>Add  Admin</span>
                        </Link>
                    </NavLink>
                </li>

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/view-admins'>
                        <Link to='/view-admins' className="nav-link">
                            <i className="material-icons">note_add</i>
                            <span>View Admins</span>
                        </Link>
                    </NavLink>
                </li>

                {/* <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/add-user'>
                        <Link className="nav-link">
                            <i className="material-icons">note_add</i>
                            <span>Add User</span>
                        </Link>
                    </NavLink>
                </li> */}

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/view-users'>
                        <Link to='/view-users' className="nav-link">
                            <i className="material-icons">note_add</i>
                            <span>View Users</span>
                        </Link>
                    </NavLink>
                </li>


            </ul>
        )
    }
}



export default RoleDropdown
