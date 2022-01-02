import React from "react";

function Heading() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info py-3 shadow-sm mb-4">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">Great<span className="text-danger">Spiration</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 fw-bold mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/" id="Portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/project">Projects</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                           <button className="btn btn-outline-danger shadow-none" type="submit"><i className="far fa-envelope"></i> Hire Me</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Heading;