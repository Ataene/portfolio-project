import React from "react";

function Services(){
    return(
        <div>
            <div>
        <div className="row" style={{color: 'white'}}>
                <h1 className="mx-auto d-flex justify-content-center fw-bold text-success">Our Services</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-2 m-4 w-75 rounded mx-auto">
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/javascript.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">We offer excellent, responsive and well designed web development services
                            </p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Hire Me</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/Figma.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">UI/UX Design</h5>
                            <p className="card-text">We offer excellent, and quality designs and priting services. All Digital prints</p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Hire Me</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/react.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">React Native</h5>
                            <p className="card-text">We build and deploy mobile designs and quality mobile Apps. Contact us for you Mobile Services</p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Hire Me</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )


}

export default Services;