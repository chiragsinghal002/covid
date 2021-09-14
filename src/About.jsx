import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function About() {
    return (
        <>
            <body>

                {/* <div className="preloader"></div> */}

                <div className="main-wrapper">
                    <Header />
                    <div className="page-nav padding-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="section-title text-center">
                                        <h2 className="text-white mb-3">About us</h2>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="home-1.html" className="text-white">Home</a></li>
                                            <li className="list-inline-item"><a href="javascript:void(0);" className="text-white">About</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="symptom-wrapper padding-100 pb-0 pos-top">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="section-title text-center">
                                        <h5 className="has-animation" data-delay="0">App Feature</h5>
                                        <h2 className="has-animation" data-delay="50">Basic Feature You Will Get When You Use</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="symptom owl-carousel owl-theme">
                                    <div className="owl-items">
                                        <div className="symptom-content has-animation" data-delay="0">
                                            <div className="icon-div one-no"><i className="ti-lock"></i></div>
                                            <h4 className="mb-3">Fever</h4>
                                            <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                        </div>
                                    </div>
                                    <div className="owl-items">
                                        <div className="symptom-content has-animation" data-delay="50">
                                            <div className="icon-div two-no"><i className="ti-panel"></i></div>
                                            <h4 className="mb-3">Cough</h4>
                                            <p>Coughing is another key symptom, but it's not just any cough, said Schaffner. It should
                                                be a dry cough that you feel in your chest.</p>
                                        </div>
                                    </div>
                                    <div className="owl-items">
                                        <div className="symptom-content has-animation" data-delay="100">
                                            <div className="icon-div three-no"><i className="ti-package"></i></div>
                                            <h4 className="mb-3">Difficulty Breathing</h4>
                                            <p>Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and
                                                it can occur on its own, without a cough. </p>
                                        </div>
                                    </div>

                                    <div className="owl-items">
                                        <div className="symptom-content has-animation" data-delay="150">
                                            <div className="icon-div four-no"><i className="ti-lock"></i></div>
                                            <h4 className="mb-3">Fever</h4>
                                            <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                        </div>
                                    </div>
                                    <div className="owl-items">
                                        <div className="symptom-content has-animation" data-delay="0">
                                            <div className="icon-div five-no"><i className="ti-panel"></i></div>
                                            <h4 className="mb-3">Cough</h4>
                                            <p>Coughing is another key symptom, but it's not just any cough, said Schaffner. It should
                                                be a dry cough that you feel in your chest.</p>
                                        </div>
                                    </div>
                                    <div className="owl-items">
                                        <div className="symptom-content has-animation" data-delay="0">
                                            <div className="icon-div six-no"><i className="ti-package"></i></div>
                                            <h4 className="mb-3">Difficulty Breathing</h4>
                                            <p>Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and
                                                it can occur on its own, without a cough. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-section padding-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5">
                                    <img src="./images/banner-right-image.png" alt="" className="img-fluid has-animation" data-delay="0" />
                                </div>
                                <div className="col-xl-5 col-lg-5 offset-xl-1 mt-5">
                                    <h1 className="has-animation" data-delay="0">Stay Home, And Prayer For Victim </h1>
                                    <p className="has-animation" data-delay="50">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                                    <p className="has-animation" data-delay="100">Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and                                 it can occur on its own, without a cough. </p>
                                    <a href="javascript:void(0);" className="btn btn-primary btn-lg mt-3 text-white has-animation" data-delay="50">Download Now</a>
                                </div>
                            </div>
                            <div className="row padding-top-100">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-3 count-wrapper text-center has-animation" data-delay="0">
                                    <i className="ti-lock"></i>
                                    <h3 className="fmont fw400 text-grey">403</h3>
                                    <span>startups</span>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-3 count-wrapper text-center has-animation" data-delay="50">
                                    <i className="ti-export"></i>
                                    <h3 className="fmont fw400 text-grey">120+</h3>
                                    <span>member</span>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-3 count-wrapper text-center has-animation" data-delay="100">
                                    <i className="ti-crown"></i>
                                    <h3 className="fmont fw400 text-grey">22M</h3>
                                    <span>revenue</span>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-3 count-wrapper text-center has-animation" data-delay="150">
                                    <i className="ti-heart"></i>
                                    <h3 className="fmont fw400 text-grey">5643</h3>
                                    <span>download</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faqs-wrapper bitcoin-agency padding-bottom-100">
                        <div className="container">
                            <div className="row justify-content-center padding-bottom-50">
                                <div className="col-xl-8">
                                    <div className="section-title text-center">
                                        <h5 className="has-animation" data-delay="0">Faqs</h5>
                                        <h2 className="has-animation" data-delay="50">Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 col-md-12 offset-md-0 pad-75 pad-right-90 pad-left-90 bg-lightblue2 has-animation">
                                    <div id="accordion" role="tablist" className="has-animation animate-in">
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingOne">
                                                <a className="fmont" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span>01 . </span> Unique and bold website design</a>

                                            </div>

                                            <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
                                                <div className="card-body">
                                                    <p className="fmont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingTwo">
                                                <a className="fmont collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>02 . </span>We're are ready to start now</a>
                                            </div>
                                            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" >
                                                <div className="card-body">
                                                    <p className="fmont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingThree">
                                                <a className="fmont collapsed" data-toggle="collapse" href="#collapse11" aria-expanded="false" aria-controls="collapse11"><span>03. </span> We deliver the highest quality design</a>
                                            </div>
                                            <div id="collapse11" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="fmont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingFour">
                                                <a className="fmont collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>04. </span> We deliver the highest quality design</a>

                                            </div>
                                            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="fmont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="app-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 app-wrap">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <h1 className="text-white has-animation" data-delay="0">Get the simple app for latest news</h1>
                                            <p className="has-animation" data-delay="50">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                                            <a href="javascript:void(0);" className="btn btn-primary btn-lg mt-3 bg-white has-animation" data-delay="100">Download Now</a>
                                        </div>
                                        <img src="images/phone-1.png" alt="phone" className="app-phone has-animation" data-delay="50" style={{ width: "20%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />



                </div>
            </body>
        </>
    )
}
