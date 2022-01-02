import React from "react";

function SignupForm() {
    return (
    <div className="container w-75">
        <div className="row">
            <div className="col" style={{color: 'white'}}>
                <h1 className="display-4 fw-bold text-warning">Contact Info</h1>
                <h4 className="col-lg-10 fs-4"><i className="fas fa-address-card"></i> Address</h4>
                <p>Calgary, Alberta, Canda</p>
                <h4 className="col-lg-10 fs-4"><i className="far fa-envelope"></i> Email</h4>
                <p>greatspiration@yahoo.com</p>
                <h4 className="col-lg-10 fs-4 text-success"><i className="fas fa-phone"></i> Phone</h4>
                <p className="text-info">+1 (587) 800-5896</p>
                <h4 className="col-lg-10 fs-4"><i className="fas fa-globe"></i> Website</h4>
                <p>www.greatspiration.com</p>
            </div>
            <div className="col" style={{ backgroundColor: 'black'}}>
                <form className="p-4 p-md-5 border rounded-3 bg-light">
                    <h1>Send a message.</h1>
                    <div className="form-floating mb-3">
                        <input type="firstname" className="form-control" id="floatingInput" placeholder="Your Name" />
                            <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                            <label for="floatingPassword">Email</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                        <textarea className="form-control" placeholder="Enter your message"></textarea>
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Submit</button>
                        <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignupForm;