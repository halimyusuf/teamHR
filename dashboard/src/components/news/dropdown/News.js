import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class News extends Component {

    render() {
        return (
            <ul className="nav flex-column">

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/add-news' className="nav-link">
                        <i className="material-icons">note_add</i>
                        <span>Add  News</span>
                    </NavLink>
                </li>

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/view-news' className="nav-link">
                        <i className="material-icons">note_add</i>
                        <span>View News</span>
                    </NavLink>
                </li>


            </ul>
        )
    }
}



export default News
