import React from "react";

function Title() {

    function openButton(){
    window.open("https://github.com/Ataene");
    }
    function openButton1(){
        window.open("https://www.linkedin.com/in/alafonye-emmanuel-k/")
    }

    return (
        <div className="row featurette d-flex mx-auto justify-content-center mb-5 w-75">
            <div className="col-md-6 order-md-2 d-flex justify-content-center align-item-center" style={{color: 'white'}}>
                <div className="flex-md-row">
                <h1 className="style-name">Hello, I'm Ata <span className="text-danger">Emmanuel</span></h1>
                <h5 className="full">A Full Stack Software Engineer & UI/UX Designer</h5>
                <p className="lead">BSc In Petroleum Systems Engineering</p>
                <p>I find passion in software development <br />
                 A freelance in <span className="text-success">software and mobile development</span>
                </p>
                <button onClick={openButton} type="button" className="btn git btn-lg m-1 btn-primary shadow-none"><i className="fab fa-github fa-lg"></i></button>
                <button onClick={openButton1} type="button" className="btn btn-lg m-1 btn-primary shadow-none"><i className="fab fa-linkedin fa-lg"></i></button>
                </div>
            </div>  
            <div className="col-md-6 order-md-1 d-flex justify-content-center">
                <img className="rounded w-200 h-100" src="/assets/Ataene.png" alt="profile"/>
            </div>
        </div>
    )
}

export default Title;