import React from "react";

function CustomCards() {
    return (
        <div className="container px-4 py-5 w-75" id="custom-cards">
            <h2 className="pb-2 border-bottom d-flex justify-content-center fw-bold m-2" style={{ color: 'white' }}>Continous Learning</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ background: `linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="mt-5 mb-4 display-6 lh-1 fw-bold">Data Structure</h2>
                            <h3>Big O</h3>
                            <h3>Recursion</h3>
                            <h3>Binary Search</h3>
                            <h3>Hash Tables</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="./assets/html-5.png" alt="man" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>Earth</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>3d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ background: `linear-gradient(to top, #50cc7f 0%, #f5d100 100%)` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" >
                            <h2 className="mt-5 mb-4 display-6 lh-1 fw-bold">Challenge</h2>
                            <h3>FizzBuzz</h3>
                            <h3>Linear Search</h3>
                            <h3>Graph & Trees</h3>
                            <h3>Reverse String</h3>
                            <h3>Sorting</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="./assets/html-5.png" alt="man" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>Canada</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>4d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ background: `linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1" style={{ color: 'white' }}>
                            <h2 className="mt-5 mb-4 display-6 lh-1 fw-bold">Premuim</h2>
                            <h3>Stacks</h3>
                            <h3>Qeues</h3>
                            <h3>Trie</h3>
                            <h3>Finabocci</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="./assets/html-5.png" alt="man" width="32" height="32" className="rounded-circle border border-white" />
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>USA</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>5d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CustomCards;