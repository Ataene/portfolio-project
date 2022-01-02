import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide w-50 d-flex mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/assets/eCommerce.jpg" className="d-block w-100" alt="Customer Mary" />
                        <div className="carousel-caption d-none d-md-block">
                        <h1>Mary Chris</h1> 
                        <p>GreatSpiration provided the perfect design for our brand.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/Chris.jpg" className="d-block w-100" alt="Customer Chris" />
                        <div className="carousel-caption d-none d-md-block">
                        <h1>Michelle Ben</h1> 
                        <p>The services and communication was spot on. Thanks</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/John.jpg" className="d-block w-100" alt="Customer John" />
                        <div className="carousel-caption d-none d-md-block">
                        <h1>Micheal Hoff</h1> 
                        <p>We had a great experience working with this brand. Thanks</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;