import React from "react";

function Footer() {

    // function openButton(){
    //     window.open("https://github.com/Ataene");
    //     }
    //     function openButton1(){
    //         window.open("https://www.linkedin.com/in/alafonye-emmanuel-k/")
    //     }
    return (
        <div>
            <div className="container" style={{color: 'white'}}>
                <footer className="py-5">
                    <div className="row mx-auto d-flex justify-content-center ">
                        <div className="col-2">
                            <h5>Navigation</h5>
                            <ul className="flex-column list-unstyled">
                                <li className="mb-2"><a href="#" className="">Home</a></li>
                                <li className="mb-2"><a href="#">About</a></li>
                                <li className="mb-2"><a href="#">Portfolio</a></li>
                                <li className="mb-2"><a href="#">Projects</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                        <button className="btn btn-primary shadow-none" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-4 my-4 border-top">
                        <p className="d-flex mt-3">&copy; 2022 Great<span className="text-danger">Spiration</span>, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-twitter-square fa-3x text-primary"></i></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-instagram fa-3x text-primary"></i></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-facebook fa-3x text-primary"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;