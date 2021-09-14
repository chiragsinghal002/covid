import React from 'react'

export default function LeftNavigation() {
    return (
        <>
            <div class="right-content">
                <div class="left-sidebar content-scroll" style={{overflow: "auto",outline: "none;"}}>
                    <div class="sidebar active">
                        <div class="text-left mb-2 mt-3">
                            <h2 class="title-text">COVID-19 Tracker</h2>
                        </div>
                        <ul class="profile-detail list-inline pt-2">
                            <li class="list-block-item text-left">
                                <h6 class="mb-0">Total Case</h6>
                                <small class="text-danger mb-0 dz-g-confirmed">0</small>
                                <b class="dz-g-today-confirmed">+0</b>
                            </li>
                            <li class="list-block-item text-left">
                                <h6 class="mb-0">Active Case</h6>
                                <small class="text-warning mb-0 dz-g-active">0</small>

                            </li>
                            <li class="list-block-item text-left">
                                <h6 class="mb-0">Recovered  Case</h6>
                                <small class="text-success mb-0 dz-g-recovered">0</small>
                                <b class="dz-g-today-recovered">+0</b>
                            </li>
                            <li class="list-block-item text-left">
                                <h6 class="mb-0">Deaths Case</h6>
                                <small class="text-primary mb-0 dz-g-deaths">0</small>
                                <b class="dz-g-today-deaths">+0</b>
                            </li>
                        </ul>
                        <h4 class="dz-title">Top 10 Country</h4>
                        <ul class="country-list list-inline">
                            <li class="list-block-item" data-country-code="US">
                                <img src="https://disease.sh/assets/img/flags/us.png" alt="" />
                                <span>USA</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="IT">
                                <img src="https://disease.sh/assets/img/flags/it.png" alt="" />
                                <span>Italy</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="GB">
                                <img src="https://disease.sh/assets/img/flags/gb.png" alt="" />
                                <span>United Kingdom</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="ES">
                                <img src="https://disease.sh/assets/img/flags/es.png" alt="" />
                                <span>Spain</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="AF">
                                <img src="https://disease.sh/assets/img/flags/af.png" alt="" />
                                <span>Afghanistan</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="AL">
                                <img src="https://disease.sh/assets/img/flags/al.png" alt="" />
                                <span>Albania</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="AD">
                                <img src="https://disease.sh/assets/img/flags/ad.png" alt="" />
                                <span>Andorra</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="AT">
                                <img src="https://disease.sh/assets/img/flags/at.png" alt="" />
                                <span>Austria</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="BZ">
                                <img src="https://disease.sh/assets/img/flags/bz.png" alt="" />
                                <span>Belize</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                            <li class="list-block-item" data-country-code="BO">
                                <img src="https://disease.sh/assets/img/flags/bo.png" alt="" />
                                <span>Bolivia</span>
                                <h6 class="dz-confirmed">0</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-content active" id="chats">
                    <div class="d-flex justify-content-between country-stat-select align-items-center">
                        <div class="country-select-box">
                            <select class="country-picker">
                                <option value="US">USA</option>
                                <option value="ES">Spain</option>
                                <option value="IT">Italy</option>
                            </select>
                        </div>
                        {/* <div class="updateOn" id="CoronaWorldMapStatUpdateOn"></div> */}
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            {/* <div class="row">
                                <select class="selectpicker countrypicker" data-live-search="true" data-default="United States" data-flag="true"></select>
                                <img src="https://corona.lmao.ninja/assets/img/flags/us.png" width="20" />

                                <div class="col-lg-12" id="CoronaUpdateByCountryBox"></div>
                            </div> */}
                        </div>
                        <div class="col-lg-6 col-md-12" id="VMAP_CoronaUpdates">
                            <div id="loader" style={{display: "flex", justifyContent: "center;"}}>
                                <div class="spinner-grow text-muted mt-3"></div>
                                <div class="spinner-grow text-primary mt-3"></div>
                                <div class="spinner-grow text-success mt-3"></div>
                                <div class="spinner-grow text-info mt-3"></div>
                                <div class="spinner-grow text-warning mt-3"></div>
                                <div class="spinner-grow text-danger mt-3"></div>
                                <div class="spinner-grow text-secondary mt-3"></div>
                                <div class="spinner-grow text-dark mt-3"></div>
                                <div class="spinner-grow text-light mt-3"></div>
                            </div>


                            <div class="modal fade stats-modal" id="alert-modal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="modal-title"></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" id="modal-body">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container-fluid mb-4">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="region-stat-chart-container">
                                                            <canvas id="region-stat-chart"></canvas>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="container-fluid stats-box">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <ul class="list-group modal-list">
                                                            <li class="list-group-item">
                                                                <h6>New</h6>
                                                            </li>
                                                            <li
                                                                class="list-group-item list-group-item-warning"
                                                                id="region-new-confirmed"
                                                            ></li>
                                                            <li
                                                                class="list-group-item list-group-item-danger"
                                                                id="region-new-deaths"
                                                            ></li>
                                                            <li
                                                                class="list-group-item list-group-item-success"
                                                                id="region-new-recovered"
                                                            ></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <ul class="list-group modal-list">
                                                            <li class="list-group-item">
                                                                <h6>Total</h6>
                                                            </li>
                                                            <li
                                                                class="list-group-item list-group-item-warning"
                                                                id="region-total-confirmed"
                                                            ></li>
                                                            <li
                                                                class="list-group-item list-group-item-danger"
                                                                id="region-total-deaths"
                                                            ></li>
                                                            <li
                                                                class="list-group-item list-group-item-success"
                                                                id="region-total-recovered"
                                                            ></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div id="globalStateRow" class="all-country-stat d-flex">

                    </div> */}
                </div>
                <div class="chat-content" id="table">
                    <div class="widget-area">
                        <div class="widget-head">
                            <h1 class="dez-title">Ajax Data Table - Covid-19 Country Wise State</h1>
                        </div>
                        <div class="widget-body">
                            <table id="CountryStatsDataTable" class="display" width="100%">
                                chirag
                            </table>
                        </div>
                    </div>
                </div>
                <div class="chat-content" id="tiles">
                    <h1 class="stat-head">Top 10 Country wise Covid-19 Updates - Tiles</h1>
                    <div class="row" id="TopCountryStats">
                        <div class="col-md-4 col-lg-2 col-6" id="CountryTopCases">
                            <h4>Top Cases</h4>
                        </div>
                        <div class="col-md-4 col-lg-2 col-6" id="CountryTodayCases">
                            <h4> Today Cases</h4>
                        </div>
                        <div class="col-md-4 col-lg-2 col-6" id="CountryTopDeaths">
                            <h4> Today Deaths</h4>
                        </div>
                        <div class="col-md-4 col-lg-2 col-6" id="CountryTodayDeaths">
                            <h4> Today Deaths</h4>
                        </div>
                        <div class="col-md-4 col-lg-2 col-6" id="CountryTopActive">
                            <h4> Top Active</h4>
                        </div>
                        <div class="col-md-4 col-lg-2 col-6" id="CountryTopRecover">
                            <h4> Top Recover</h4>
                        </div>
                    </div>
                </div>
                <div class="chat-content" id="country-wise">
                    <h1 class="stat-head">Covid-19 Country Wise - Tabs</h1>
                    <div class="corona-update-in-tab">

                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a data-toggle="tab" href="#USA" class="active"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/us.png" width="30" />USA</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#Spain"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/es.png" width="30" />Spain</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#Italy"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/it.png" width="30" />Italy</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#India"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/in.png" width="30" />India</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#UnitedKingdom"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/gb.png" width="30" />United Kingdom</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#France"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/fr.png" width="30" />France</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#Germany"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/de.png" width="30" />Germany</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#Russia"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/ru.png" width="30" />Russia</a>
                            </li>
                            <li class="nav-item">
                                <a data-toggle="tab" href="#Turkey"><img alt="" src="https://corona.lmao.ninja/assets/img/flags/tr.png" width="30" />Turkey</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="USA" data-country-code="US" class="tab-pane active"></div>
                            <div id="Spain" data-country-code="ES" class="tab-pane"></div>
                            <div id="Italy" data-country-code="IT" class="tab-pane"></div>
                            <div id="India" data-country-code="IN" class="tab-pane"></div>
                            <div id="UnitedKingdom" data-country-code="GB" class="tab-pane"></div>
                            <div id="France" data-country-code="FR" class="tab-pane"></div>
                            <div id="Germany" data-country-code="DE" class="tab-pane"></div>
                            <div id="Russia" data-country-code="RU" class="tab-pane"></div>
                            <div id="Turkey" data-country-code="TR" class="tab-pane"></div>
                        </div>
                    </div>
                </div>
                <div class="chat-content" id="widgets">
                    <div class="row" id="widgetDiv"></div>
                </div>
                <div class="chat-content" id="charts">
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">USA</h4>
                                </div>
                                <div class="widget-body">
                                    <canvas id="usa_timeseries"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">Spain</h4>
                                </div>
                                <div class="widget-body">
                                    <canvas id="spain_timeseries"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">Italy</h4>
                                </div>
                                <div class="widget-body">
                                    <canvas id="italy_timeseries"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">Germany</h4>
                                </div>
                                <div class="widget-body">
                                    <canvas id="germany_timeseries"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">France</h4>
                                </div>
                                <div class="widget-body">
                                    <canvas id="france_timeseries"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">China</h4>
                                </div>
                                <div class="widget-body">
                                    <canvas id="china_timeseries"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-content continent-area" id="continent">
                    <div class="row">
                        <div class="col-xl-8 col-lg-6">
                            <div class="widget-area">
                                <div class="widget-head">
                                    <h4 class="dez-title">World</h4>
                                </div>
                                <div class="widget-body">
                                    <div id="continent-map" class="continent-map"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6">
                            <div class="row continent-on">
                                <div class="col-xl-12 col-lg-12">
                                    <div class="country-datainfo">
                                        <h3 class="dez-title">
                                            <div id="country_flag"></div>
                                            <span id="country_name"></span>
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
                                            <h3 id="country_cases"></h3>
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
                                            <h3 id="country_todayCases"></h3>
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
                                            <h3 id="country_deaths"></h3>
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
                                            <h3 id="country_todayDeaths"></h3>
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
                                            <h3 id="country_recovered"></h3>
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
                                            <h3 id="country_active"></h3>
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
                                            <h3 id="country_critical"></h3>
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
                                            <h3 id="country_casesPerOneMillion"></h3>
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
                                            <h3 id="country_deathsPerOneMillion"></h3>
                                        </div>
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
