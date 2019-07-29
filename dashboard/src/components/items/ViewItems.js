import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../style/datatable.css'
import swal from 'sweetalert';
import Moment from "react-moment";


const $ = require('jquery');
$.DataTable = require("datatables.net")

class ViewItems extends Component {

    state = { category: [], isLoading: false, isEdit: false }

    componentDidMount() {
        this.fetchCategory()
    }

    fetchCategory = async () => {
        let isDev = /localhost/.test(window.location.origin);
        console.log("isdev", isDev)
        let base_url = isDev ? "http://localhost:4000/api" : "http://www.acadatrends.com/api"
        fetch(`${base_url}/item/`).then((response) => {
            return response.json()
        }).then((categoryData) => {
            console.log("yes", categoryData.data)
            this.setState({ category: categoryData.data.length ? categoryData.data.reverse() : null });
            $("#example").DataTable()
        })

    }

    handleEdit = (e) => {
        console.log(e.target.id)
        this.setState({ isEdit: true })
        this.props.history.push(`/edit-category/${e.target.id}`)
    }

    handleDelete = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        let id = e.target.id;
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to retrieve",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    console.log("Will delete")

                    fetch(`http://localhost:4000/api/item/${id}`, {
                        method: "DELETE",
                        cache: "no-cache",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "x-access-token": localStorage.getItem("admin") || ""
                        },
                    }).then((res) => {
                        res.json()
                    }).then((data) => {
                        console.log("data", data)
                        swal("File successfully deleted", {
                            icon: "success"
                        });
                        this.fetchCategory()
                    })

                } else {
                    console.log("Will not delete")
                }
            })
    }

    render() {
        if (this.state.isEdit) {

        }
        console.log("render", this.state)
        const mydata = this.state.category;
        console.log("tunde", mydata)

        let categoryList = mydata ? (
            mydata.map((o, i) => {
                console.log("my data", o);
                return (
                    <tr key={o.id}>
                        <td>{i + 1}</td>
                        <td>{o.item_name}</td>
                        <td>{o.item_category}</td>
                        <td>{o.item_description}</td>
                        <td>{o.item_price}</td>
                        <td><Moment fromNow>{o.createdAt}</Moment></td>
                        <td><button className="btn btn-primary btn-xs" style={{ borderRadius: "50px", width: "10px" }} onClick={this.handleEdit} id={o._id}><i className="material-icons" id={o._id} style={{ left: "-6px", fontSize: "13px" }}>mode_edit</i></button></td>
                        <td><button className="btn btn-danger btn-xs" style={{ borderRadius: "50px", width: "10px", }} onClick={this.handleDelete} id={o._id}><i className="material-icons" id={o.id} style={{ left: "-6px", fontSize: "13px" }}>delete_sweep</i></button></td>
                    </tr>
                )
            })
        ) : (
                <div>No data to show</div>
            )
        return (
            <Preloader>
                <Placeholder>
                    <span >Loading...</span>
                </Placeholder>
                <div className="main-content-container container-fluid px-4" style={{ background: "white" }}>
                    <div className="card-body" style={{ background: "white" }}>
                        <table id="example" className="table table-striped table-bordered table-hover" width="100%" >
                            <thead>
                                <tr>
                                    <th>S/n</th>
                                    <th>Item Name</th>
                                    <th>Item Category</th>
                                    <th>Item Description</th>
                                    <th>Item Price</th>
                                    <th>Date Created</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categoryList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Preloader>
        )
    }
}


export default ViewItems