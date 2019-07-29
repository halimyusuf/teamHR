import React, { Component } from 'react'
import { forgotPassword } from '../store/actions/authActions'
import { connect } from 'react-redux'

class ForgotPassword extends Component {


    state = { email: "", isLoading: false }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let { email } = this.state
        console.log(email)
        let obj = { email };
        console.log(obj)
        await this.props.forgotPassword(obj)
    }

    // sendEmail = () =>{
    //     fetch(`http://localhost:4000/api/user/forgot-password`).then(res =>{
    //         return res.json();
    //     }).then(data =>{
    //         console.log(data)
    //     })
    // }

    render() {

        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Enter your email</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div htmlFor="recipient-name" className="alert alert-info text-center" role="alert">You will receive a confirmation mail after sending
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control" id="email" placeholder="example@gmail.com" onChange={this.handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                                {this.state.isResetLoading ? <span><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Sending...</span> : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("down state", state)
    const { authMessage, registerData, status } = state.auth;
    return {
        authMessage,
        registerData,
        status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forgotPassword: (admin) => {
            return new Promise((resolve) => {
                dispatch(forgotPassword(admin, function (res) {
                    resolve(res);
                }))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)