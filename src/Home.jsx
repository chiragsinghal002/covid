import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import Preloader from './Preloader'

export default function Home() {
    return (
        <>
            <body>
           <Preloader />
               
                <div class="main-wrapper">
                    <Header />
                    <div class="banner-wrapper" >
                        <div class="container">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="hero-content">
                                        <h1 class="text-white"> Stay Home, And Prayer For Victim Of Corona virus.</h1>
                                        <p class="text-white mt-4 mb-5">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.</p>
                                        <div class="country-stat owl-carousel owl-theme" id="CountryDataOwl">
                                            <div class="owl-items">
                                                <div class="stat-country" data-country-code="US">
                                                    <img src="https://disease.sh/assets/img/flags/us.png" alt="" />
                                                    <div class="stat-div float-right">
                                                        <b class="text-danger dz-confirmed">0</b>
                                                        <i class="text-danger ti-stats-down"></i>
                                                        <span class="bg-success text-white ml-2 dz-recovered">0</span>
                                                        <span class="bg-warning text-white dz-death">0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-items">
                                                <div class="stat-country" data-country-code="AF">
                                                    <img src="https://disease.sh/assets/img/flags/af.png" alt="" />
                                                    <div class="stat-div float-right">
                                                        <b class="text-danger dz-confirmed">0</b>
                                                        <i class="text-danger ti-stats-down"></i>
                                                        <span class="bg-success text-white ml-2 dz-recovered">0</span>
                                                        <span class="bg-warning text-white dz-death">0</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="owl-items">
                                                <div class="stat-country" data-country-code="GB">
                                                    <img src="https://disease.sh/assets/img/flags/gb.png" alt="" />
                                                    <div class="stat-div float-right">
                                                        <b class="text-danger dz-confirmed">0</b>
                                                        <i class="text-danger ti-stats-down"></i>
                                                        <span class="bg-success text-white ml-2 dz-recovered">0</span>
                                                        <span class="bg-warning text-white dz-death">0</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="owl-items">
                                                <div class="stat-country" data-country-code="ES">
                                                    <img src="https://disease.sh/assets/img/flags/es.png" alt="" />
                                                    <div class="stat-div float-right">
                                                        <b class="text-danger dz-confirmed">0</b>
                                                        <i class="text-danger ti-stats-down"></i>
                                                        <span class="bg-success text-white ml-2 dz-recovered">0</span>
                                                        <span class="bg-warning text-white dz-death">0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="hero-img">
                                        <img src="./images/banner-right-image1.png" alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="symptom-wrapper padding-v100" style={{ background: "aliceblue;" }}>
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
                    <div class="spread-wrapper padding-100 bg-light">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-8">
                                    <div class="section-title text-center">
                                        <h5 class="has-animation" data-delay="0">Prevent</h5>
                                        <h2 class="has-animation" data-delay="50">Best way to prevent is avoid virus.</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 mt-5 mb-3">
                                    <div class="spread-div has-animation" data-delay="0">
                                        <div class="spread-image">
                                            <div class='r-hex'>
                                                <div class='r-hex-inner'></div>
                                            </div>
                                            <img src="images/icon2.png" alt="" />
                                        </div>
                                        <div class="spread-content">
                                            <h4 class="mb-3">Personal Contact</h4>
                                            <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mt-5 mb-3">
                                    <div class="spread-div has-animation" data-delay="50">
                                        <div class="spread-image">
                                            <div class='r-hex'>
                                                <div class='r-hex-inner'></div>
                                            </div>
                                            <img src="images/icon4.png" alt="" />
                                        </div>
                                        <div class="spread-content">
                                            <h4 class="mb-3">Wash hands</h4>
                                            <p>Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mt-5">
                                    <div class="spread-div has-animation" data-delay="100">
                                        <div class="spread-image">
                                            <div class='r-hex'>
                                                <div class='r-hex-inner'></div>
                                            </div>
                                            <img src="images/icon5.png" alt="" />
                                        </div>
                                        <div class="spread-content">
                                            <h4 class="mb-3">Social distancing</h4>
                                            <p>Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mt-5 mb-3">
                                    <div class="spread-div has-animation" data-delay="150">
                                        <div class="spread-image">
                                            <div class='r-hex'>
                                                <div class='r-hex-inner'></div>
                                            </div>
                                            <img src="images/breathing.svg" alt="" />
                                        </div>
                                        <div class="spread-content">
                                            <h4 class="mb-3">Respiratory hygiene</h4>
                                            <p>Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 mt-5">
                                    <div class="spread-div has-animation" data-delay="200">
                                        <div class="spread-image">
                                            <div class='r-hex'>
                                                <div class='r-hex-inner'></div>
                                            </div>

                                            <img src="images/icon6.png" alt="" />
                                        </div>
                                        <div class="spread-content">
                                            <h4 class="mb-3">Clean And Disinfect</h4>
                                            <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mt-5 mb-3">
                                    <div class="spread-div has-animation" data-delay="250">
                                        <div class="spread-image">
                                            <div class='r-hex'>
                                                <div class='r-hex-inner'></div>
                                            </div>
                                            <img src="images/banner-right.png" alt="" />
                                        </div>
                                        <div class="spread-content">
                                            <h4 class="mb-3">Wear a Facemask</h4>
                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="symptom-wrapper padding-v100">
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
                                <div class="col-xl-4 col-lg-4 col-md-6 has-animation" data-delay="0">
                                    <div class="prevent-image">
                                        <img src="images/p-1.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wear Facemask</h4>
                                        <p class="mb-0">Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 has-animation" data-delay="50">
                                    <div class="prevent-image">
                                        <img src="images/p-2.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wash your hangs often</h4>
                                        <p class="mb-0">Coughing is another key symptom, but it's not just any cough, said Schaffner. It should
                                            be a dry cough that you feel in your chest.</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 has-animation" data-delay="100">
                                    <div class="prevent-image">
                                        <img src="images/p-3.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Keep social distance</h4>
                                        <p class="mb-0">Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and
                                            it can occur on its own, without a cough. </p>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-6 has-animation" data-delay="150">
                                    <div class="prevent-image">
                                        <img src="images/p-4.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wear Facemask</h4>
                                        <p class="mb-0">Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 has-animation" data-delay="200">
                                    <div class="prevent-image">
                                        <img src="images/p-5.jpg" alt="image" />
                                    </div>
                                    <div class="prevent-content">
                                        <h4 class="mb-4">Wash your hangs often</h4>
                                        <p class="mb-0">Coughing is another key symptom, but it's not just any cough, said Schaffner. It should
                                            be a dry cough that you feel in your chest.</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 has-animation" data-delay="250">
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
                    <div class="faq-wrapper padding-v100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div class="section-title text-center">
                            <h5 class="text-white has-animation" data-delay="0">Faqs</h5>
                            <h2 class="text-white has-animation" data-delay="50">Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-6 has-animation" data-delay="0">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  01. How does COVID-19 spread?
                                </a>
                              </h4>
                              </div>
                              <div id="collapseOne" class="panel-collapse in collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                  <p>Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus.</p>
                                </div>
                              </div>
                            </div>
                            <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  2. What are the symptoms of COVID-19?
                                </a>
                              </h4>
                              </div>
                              <div id="collapseTwo" class="panel-collapse in collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                  <p>Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus.</p>
                                </div>
                              </div>
                            </div>
                            <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  3. Should I wear mask?
                                </a>
                              </h4>
                              </div>
                              <div id="collapseThree" class="panel-collapse in collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                  <p>Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>

                    <div class="col-lg-6 has-animation" data-delay="50">
                        <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingFour">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  04. What does it mean to self-isolate?
                                </a>
                              </h4>
                              </div>
                              <div id="collapseFour" class="panel-collapse in collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div class="panel-body">
                                  <p>Self-isolation is when a person who is experiencing fever, cough or other COVID-19 symptoms stays at home and does not go to work, school or public places. This can be voluntarily or based on his/her health care provider’s recommendation.</p>
                                </div>
                              </div>
                            </div>
                            <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingFive">
                                <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                  05. Can children or adolescents catch COVID-19?
                                </a>
                              </h4>
                              </div>
                              <div id="collapseFive" class="panel-collapse in collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div class="panel-body">
                                  <p>Children and adults should follow the same guidance on self-quarantine and self-isolation if there is a risk they have been exposed or are showing symptoms. It is particularly important that children avoid contact with older people.</p>
                                </div>
                              </div>
                            </div>
                            <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="headingSix">
                                <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                  06. Is there a vaccine or drug  for COVID-19?
                                </a>
                              </h4>
                              </div>
                              <div id="collapseSix" class="panel-collapse in collapse show" role="tabpanel" aria-labelledby="headingSix">
                                <div class="panel-body">
                                  <p>While some western, traditional or home remedies may provide comfort and alleviate symptoms of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. WHO does not recommend self-medication with any medicines.</p>
                                </div>
                              </div>
                            </div>
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
                            <h5 class="has-animation" data-delay="0">Wash</h5>
                            <h2 class="has-animation" data-delay="50">Wash Your Hangs min 20 Second</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 text-center">
                        <img src="images/wash.png" alt="wash" style={{width: "100%;"}} class="has-animation" data-delay="50"/>
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
