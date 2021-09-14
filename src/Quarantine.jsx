import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Quarantine() {
    return (
        <>
            <body>

                {/* <div class="preloader"></div> */}

                <div class="main-wrapper">
                    <Header />
                    <div class="page-nav padding-100">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-8">
                                    <div class="section-title text-center">
                                        <h2 class="text-white mb-3">Qurantine</h2>
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><a href="home-1.html" class="text-white">Home</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0);" class="text-white">Qurantine</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="symptom-wrapper padding-100">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-8">
                                    <div class="section-title text-center">
                                        <h5 class="has-animation" data-delay="0">Symptom</h5>
                                        <h2 class="has-animation" data-delay="50">Basic Symptom Against Corona virus</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="symptom owl-carousel owl-theme">
                                    <div class="owl-items">
                                        <div class="symptom-content has-animation" data-delay="0">
                                            <span><img src="./images/fever.svg" alt="" /></span>
                                            <h4 class="mb-3">Fever</h4>
                                            <p> Fever you feel hot to touch on your chest or back (you do not need to measure your temperature). It is also may appear in 2-10 days.</p>
                                        </div>
                                    </div>
                                    <div class="owl-items">
                                        <div class="symptom-content has-animation" data-delay="50">
                                            <span><img src="./images/cough.svg" alt="" /></span>
                                            <h4 class="mb-3">Cough</h4>
                                            <p>Continuous coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours.if you usually have a cough, it may be worse than usual.</p>
                                        </div>
                                    </div>
                                    <div class="owl-items">
                                        <div class="symptom-content has-animation" data-delay="100">
                                            <span><img src="./images/breathing.svg" alt="" /></span>
                                            <h4 class="mb-3">Confusion</h4>
                                            <p>Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath a lot.</p>
                                        </div>
                                    </div>
                                    <div class="owl-items">
                                        <div class="symptom-content has-animation" data-delay="150">
                                            <span><img src="./images/banner-right.png" alt="" /></span>
                                            <h4 class="mb-3">Aches and pains</h4>
                                            <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100</p>
                                        </div>
                                    </div>
                                    <div class="owl-items">
                                        <div class="symptom-content has-animation" data-delay="200">
                                            <span><img src="./images/cough.svg" alt="" /></span>
                                            <h4 class="mb-3">Runny nose</h4>
                                            <p> People of all ages who experience fever and/or  cough associated withdifficulty breathing/shortness of breath.</p>
                                        </div>
                                    </div>
                                    <div class="owl-items">
                                        <div class="symptom-content has-animation" data-delay="250">
                                            <span><img src="./images/breathing.svg" alt="" /></span>
                                            <h4 class="mb-3">Sore throat</h4>
                                            <p>Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="symptom-wrapper pt-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-8">
                                    <div class="section-title text-center">
                                        <h5 class="has-animation" data-delay="0">Spreads </h5>
                                        <h2 class="has-animation" data-delay="50">Disease spreads from person to person</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 has-animation" data-delay="0">
                                    <div class="prevent-image">
                                        <img src="images/p-1.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wear Facemask</h4>
                                        <p class="mb-0">Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 has-animation" data-delay="50">
                                    <div class="prevent-image">
                                        <img src="images/p-2.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wash your hangs often</h4>
                                        <p class="mb-0">Coughing is another key symptom, but it's not just any cough, said Schaffner. It should
                                            be a dry cough that you feel in your chest.</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 has-animation" data-delay="100">
                                    <div class="prevent-image">
                                        <img src="images/p-3.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Keep social distance</h4>
                                        <p class="mb-0">Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and
                                            it can occur on its own, without a cough. </p>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-4 has-animation" data-delay="150">
                                    <div class="prevent-image">
                                        <img src="images/p-4.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wear Facemask</h4>
                                        <p class="mb-0">Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 has-animation" data-delay="200">
                                    <div class="prevent-image">
                                        <img src="images/p-5.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wash your hangs often</h4>
                                        <p class="mb-0">Coughing is another key symptom, but it's not just any cough, said Schaffner. It should
                                            be a dry cough that you feel in your chest.</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 has-animation" data-delay="250">
                                    <div class="prevent-image">
                                        <img src="images/p-6.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Keep social distance</h4>
                                        <p class="mb-0">Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and
                                            it can occur on its own, without a cough. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="app-wrapper padding-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 app-wrap">
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <h1 class="text-white has-animation" data-delay="0">Get the simple app for latest news</h1>
                                            <p class="has-animation" data-delay="50">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                                            <a href="javascript:void(0);" class="btn btn-primary btn-lg mt-3 bg-white has-animation" data-delay="100">Download Now</a>
                                        </div>
                                        <img src="images/phone-1.png" alt="phone" class="app-phone has-animation" data-delay="50" style={{ width: "20%" }} />
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
