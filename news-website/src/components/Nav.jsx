import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link className="nav-link text-white" to="/category/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/category/technology">Technology</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Other
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://gnews.io/" target="_blank">API Source</a></li>
                                <li><a className="dropdown-item" href="https://github.com/CSU-ServerSide-Fall-23/Group_2" target="_blank">GitHub</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="https://github.com/CSU-ServerSide-Fall-23/Group_2/issues" target="_blank">Support</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
