import React from 'react'

export default function Contament() {
    return (
        <>
            <div className="chat-content continent-area" id="continent">
                <div className="row">
                    <div className="col-xl-8 col-lg-6">
                        <div className="widget-area">
                            <div className="widget-head">
                                <h4 className="dez-title">World</h4>
                            </div>
                            <div className="widget-body">
                                <div id="continent-map" className="continent-map"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="row continent-on">
                            <div className="col-xl-12 col-lg-12">
                                <div className="country-datainfo">
                                    <h3 className="dez-title">
                                        <div id="country_flag"></div>
                                        <span id="country_name"></span>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 defult-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-defult.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Total Cases</h5>
                                        <h3 id="country_cases"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 orange-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-orange.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Today Cases</h5>
                                        <h3 id="country_todayCases"></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 red-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-red.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Total Deaths</h5>
                                        <h3 id="country_deaths"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 redark-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-redark.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Today Deaths</h5>
                                        <h3 id="country_todayDeaths"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 green-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-green.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Recovered</h5>
                                        <h3 id="country_recovered"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 blue-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-blue.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Active</h5>
                                        <h3 id="country_active"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 orange-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-orange.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Critical</h5>
                                        <h3 id="country_critical"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 defult-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-defult.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Cases Per Million</h5>
                                        <h3 id="country_casesPerOneMillion"></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="covid-widget-1 red-bx">
                                    <div className="icon">
                                        <img src="images/icons/covid-red.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h5>Deaths Per Million</h5>
                                        <h3 id="country_deathsPerOneMillion"></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
