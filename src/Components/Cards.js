import React from "react";


function Cards() {

    // const projects = projects.map(Projects) => {
    //     images = Projects.images
    // }

    return (
        <div>
        <div className="row">
                <h1 className="mx-auto d-flex justify-content-center fw-bold text-success">My Projects</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-2 m-4 w-75 rounded mx-auto">
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/eCommerce.jpg" className="card-img-top" alt="eCommerce Website" />
                        <div className="card-body">
                            <h5 className="card-title">Ecommerce Site</h5>
                            <p className="card-text"> Built and ecommerce website using React and Redux in the front end and nodejs in the backend.
                            </p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Explore</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/printing.jpg" className="card-img-top" alt="Printing Press" />
                        <div className="card-body">
                            <h5 className="card-title">Printing Press</h5>
                            <p className="card-text">Built with bootstrap in front end using Javascript concept. Deplored on Heroku</p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Explore</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/Weather.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Javascript Toggle</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary d-flex mx-auto shadow-none">Explore</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/webDev.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mobile Design</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Explore</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/Tesla2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Explore</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/assets/Tesla.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tesla App</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary shadow-none d-flex mx-auto">Explore</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cards;