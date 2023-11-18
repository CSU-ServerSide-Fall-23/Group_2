import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-black p-1 border-bottom border-secondary border-opacity-50">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/business">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/entertainment">Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">General</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Technology</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Support</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
