import React from "react";
import "./Navigation.css";
import Logo from "../assets/logo.png";

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <img src={Logo} className="navbar-brand" alt="logo" />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto text-center">
                                <li className="nav-item px-2">
                                    <a className="nav-link active" aria-current="page" href="#home">
                                        HOME
                                    </a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#about">
                                        ABOUT ME
                                    </a>
                                </li>
                                <li className="nav-item px-2 dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#frontend"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        PORTFOLIO
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#frontend">
                                                Frontend Development
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#graphics">
                                                Graphics Design
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#animation">
                                                Motion Graphics / CG Arts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#contact">
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
