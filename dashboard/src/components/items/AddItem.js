import React, { Component } from 'react'
// import { Preloader, Placeholder } from 'react-preloading-screen';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createItem, getItems, getCategory } from '../store/actions/itemActions'
import swal from 'sweetalert';
import '../layouts/swal.css'

class AddItem extends Component {
    state = { item_name: "", item_price: "", item_description: "", data: {}, isLoading: false, categoryData: [] }
    componentDidMount() {
        this.fetchCategory()
    }

    fetchCategory = async (e) => {
        await this.props.getCategory();
        let { categoryData, categoryStatus } = this.props;
        if (categoryStatus === "Success") {
            this.setState({ categoryData });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ isLoading: true });
        let { item_name, item_price, item_description } = this.state;
        let item_category = document.querySelector("#item_category").value;

        let obj = { item_name, item_price, item_category, item_description, item_category };
        console.log(this.props)
        await this.props.createItem(obj);
        return console.log(this.props);
        // if (props.status === "Success") {
        //     setTimeout(() => {
        //         // this.setState({ name: "", code: "", isLoading: false, category: props.status });
        //         swal("Response", "Category Created Successfully", "success");
        //         this.props.history.push('/view-category')
        //     }, 2500)
        // } else {
        //     setTimeout(() => {
        //         swal("Response", "Failed to create Category", "error");
        //         this.setState({ isLoading: false });
        //     }, 2500)
        // }
    }

    previewFile = () => {
        var preview = document.getElementById("image-box");
        var file = document.querySelector("input[type=file]").files[0];
        var reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                preview.src = reader.result;
                let imgStr = reader.result;
                this.setState({ image: imgStr });
                console.log("My file result", imgStr);
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    render() {

        return (
            <div className="main-content-container container-fluid px-4" id="overlay" style={{ background: "" }}>
                {/* <!-- Page Header --> */}
                <div className="page-header row no-gutters py-4" style={{ height: "0px" }}>
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                    </div>
                </div>

                <div className="container" style={{ background: "white", height: "auto" }}><br /><br />
                    <p className="" style={{ textAlign: "center", fontSize: "25px" }}>Create Item</p><br /><br />
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-2">Item Name : </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="item_name" placeholder="Item Name" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />


                        <div className="row">
                            <div className="col-md-2">Item Category : </div>
                            <div className="col-md-8">
                                <select className="custom-select" id="item_category" onChange={this.handleChange}>
                                    <option>Select Category</option>

                                    {
                                        this.state.categoryData ? (
                                            this.state.categoryData.map((o, i) => (
                                                <option id={o._id} key={o._id}>
                                                    {o.name}
                                                </option>
                                            ))
                                        ) : (
                                                <option value="2">Select 2</option>
                                            )

                                    }
                                </select>
                            </div>
                        </div><br /><br />


                        <div className="row">
                            <div className="col-md-2">Item Price : </div>
                            <div className="col-md-8">
                                <input type="number" className="form-control" id="item_price" placeholder="Item Price" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />

                        <div className="row">
                            <div className="col-md-2">Item Description : </div>
                            <div className="col-md-8">
                                <textarea type="text" wrap="on" className="form-control" id="item_description" rows="3" placeholder="Item Description" onChange={this.handleChange}></textarea>
                            </div>
                        </div><br /><br />


                        <div className="row">
                            <div className="col-md-2">Upload Image : </div>
                            <div className="col-md-8">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="form-control"
                                    id="images"
                                    placeholder="City"
                                    onChange={this.previewFile}
                                />
                                <img src="" height="200" id="image-box" alt="" />
                            </div>
                        </div>

                        <br /><br />



                        <div className="row">
                            <div className="col-md-2"> </div>
                            <div className="col-md-8">
                                <button className="mb-2 btn btn-primary mr-2 col-md-12 glyphicons glyphicons-star" disabled={this.state.isLoading ? true : false}>
                                    {this.state.isLoading ? <span><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Creating Item...</span> : "Create Item"}
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Map props", state)
    const { categoryMessage, categoryData, categoryStatus, itemMessage, itemData, itemStatus } = state.item;
    console.log(categoryMessage, categoryData, categoryStatus, itemMessage, itemData, itemStatus)
    return {
        categoryMessage, categoryData, categoryStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createItem: (item) => {
            return new Promise((resolve) => {
                dispatch(createItem(item, (res) => {
                    console.log("The res", res)
                    resolve(res);
                }))
            })
        },

        getCategory() {
            return new Promise(resolve => {
                dispatch(
                    getCategory(res => {
                        console.log("inside", res)
                        // $("#example").DataTable();
                        resolve(res)

                    })
                );
            });
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
