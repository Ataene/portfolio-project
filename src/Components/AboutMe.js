import React from "react";

function AboutMe() {
    return (
        <div>
            <div className="container w-75">
                <div className="row">
                    <div className="col pt-5" style={{ color: 'white' }}>
                        <p className="display-4 text-danger" >About Me</p>
                        <h1 className="col-lg-10 fs-4 fw-bold">Talented <span className="text-success">Software Engineer</span></h1>
                        <h4> <i className="fas fa-check"> Charismatic full Stack developer.</i></h4>
                        <h4> <i className="fas fa-check"> Petroleum Engineer.</i></h4>
                        <h4> <i className="fas fa-check text-warning" > UI / UX Web Designer.</i></h4>
                        <h4> <i className="fas fa-check"> Web Developer with React Native.</i></h4>
                        <h4> <i className="fas fa-check"> Startup Enthusiast.</i></h4>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src="/assets/javascript.png" alt="Alafonye-picture" />
                    </div>
                </div>
            </div>
            <div className="py-3 my-4">
                <h1 className="d-flex justify-content-center fw-bold p-2" style={{ color: 'white' }}>My Skills</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn m-1 btn-info shadow-none"><i className="fab fa-react"> React</i></button>
                    <button className="btn m-1 btn-info shadow-none"><i className="fab fa-react"> React Native</i></button>
                    <button className="btn m-1 btn-danger shadow-none"><i className="fab fa-node-js"> NodeJs</i></button>
                    <button className="btn m-1 btn-warning shadow-none"><i className="fas fa-database"> MongoDB</i></button>
                    <button className="btn m-1 btn-warning shadow-none"><i className="fab fa-aws"> Cloud</i></button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;