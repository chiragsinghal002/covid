import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
       <>
         <div class="header-wrapper scroll-header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="navigation">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <a class="navbar-brand logo-white" href="index.html"><img src="./images/logo-white.png" alt="logo" class="img-fluid"/></a>
                                <a class="navbar-brand logo-dark" href="index.html"><img src="./images/logo.png" alt="logo" class="img-fluid"/></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <Link class="nav-link" to={"/"}>Home</Link>
                                        </li>
                                        <li class="nav-item"><Link class="nav-link" to={"/prevention"}>Prevention</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to={"/quarantine"}>Qurantine</Link></li>
                                        {/* <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="./hand-wash.html">Hand Wash</a>
                                                <a class="dropdown-item" href="./social-distance.html">SocialDistance</a>
                                                <a class="dropdown-item" href="./blog.html">Blog</a>
                                                <a class="dropdown-item" href="./blog-single.html">Blog Details</a>
                                            </div>
                                        </li> */}
                                        <li class="nav-item"><Link class="nav-link" to={"/about"}>About</Link>                                        </li>
                                        <li class="nav-item"><Link class="nav-link" href="help.html">Help</Link>                                        </li>

                                    </ul>
                                </div>

                                <div class="signin-btn">
                                    <Link class="btn btn-primary d-none d-lg-block" to={"/tracker/1"}>Tracker</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
