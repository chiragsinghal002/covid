import React from 'react'

export default function World() {
    return (
        <>
            <div class="col-xl-12 col-lg-12">
                <div class="row continent-on">
                    <div class="col-xl-12 col-lg-12">
                        <div class="country-datainfo">
                            <h3 class="dez-title">
                                <div id="country_flag"><img src="https://disease.sh/assets/img/flags/us.png" class="img-fluid mr-3" width="70" /></div>
                                <span id="country_name">USA</span>
                            </h3>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 defult-bx">
                            <div class="icon">
                                <img src="images/icons/covid-defult.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Total Cases</h5>
                                <h3 id="country_cases">35895980</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 orange-bx">
                            <div class="icon">
                                <img src="images/icons/covid-orange.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Today Cases</h5>
                                <h3 id="country_todayCases">0</h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 red-bx">
                            <div class="icon">
                                <img src="images/icons/covid-red.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Total Deaths</h5>
                                <h3 id="country_deaths">629862</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 redark-bx">
                            <div class="icon">
                                <img src="images/icons/covid-redark.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Today Deaths</h5>
                                <h3 id="country_todayDeaths">0</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 green-bx">
                            <div class="icon">
                                <img src="images/icons/covid-green.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Recovered</h5>
                                <h3 id="country_recovered">29717537</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 blue-bx">
                            <div class="icon">
                                <img src="images/icons/covid-blue.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Active</h5>
                                <h3 id="country_active">5548581</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 orange-bx">
                            <div class="icon">
                                <img src="images/icons/covid-orange.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Critical</h5>
                                <h3 id="country_critical">11889</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 defult-bx">
                            <div class="icon">
                                <img src="images/icons/covid-defult.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Cases Per Million</h5>
                                <h3 id="country_casesPerOneMillion">107760</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="covid-widget-1 red-bx">
                            <div class="icon">
                                <img src="images/icons/covid-red.svg" alt="" />
                            </div>
                            <div class="info">
                                <h5>Deaths Per Million</h5>
                                <h3 id="country_deathsPerOneMillion">1891</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
