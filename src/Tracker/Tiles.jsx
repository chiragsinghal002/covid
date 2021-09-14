import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Tiles() {
    const [value, onChange] = useState(new Date());
    const [dailyconfirmed, setdailyconfirmed] = useState(0)
    const [dailydeath, setdailydeath] = useState(0)
    const [dailyrecovered, setdailyrecovered] = useState(0)
    const [totalconfirmed, settotalconfirmed] = useState(0)
    const [totaldeath, settotaldeath] = useState(0)
    const [totalrecovered, settotalrecovered] = useState(0)
    let curr_date = value.toLocaleDateString("fr-CA");
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json')
            .then(function (response) {
                const getdata = response.data.cases_time_series;
                getdata.filter((data) => {
                    if (data.dateymd === curr_date) {
                        setdailyconfirmed(data.dailyconfirmed);
                        setdailydeath(data.dailydeceased);
                        setdailyrecovered(data.dailyrecovered);
                        settotalconfirmed(data.totalconfirmed);
                        settotaldeath(data.totaldeceased);
                        settotalrecovered(data.totalrecovered);
                    }

                })

            })
            .catch(function (error) {

            })
    }, [value])

    return (
        <>
            <div className="chat-content" id="tiles" style={{ display: "block" }}>

                <h1 className="stat-head">Date wise Covid-19 Updates - Tiles</h1>
                <div className="col-sm-6">
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
                <br /><br />
                <div className="row">
                    <div id="globalStateRow" class="all-country-stat d-flex">
                        <div class="col">
                            <div class="icon-box">
                                <div class="icon"><img src="/images/icons/covid-defult.svg" alt="" /></div><div class="info"><h5>Daily Confirmed</h5><h3>{dailyconfirmed }</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-green.svg" alt="" /></div><div class="info"><h5>Daily Recovered</h5><h3>{ dailyrecovered}</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-red.svg" alt="" /></div><div class="info"><h5>Daily Deaths</h5><h3>{dailydeath }</h3></div></div></div>
                    </div>

                </div>
                <br/><br/>
                <div className="row">
                    <div id="globalStateRow" class="all-country-stat d-flex">
                        <div class="col">
                            <div class="icon-box">
                                <div class="icon"><img src="/images/icons/covid-defult.svg" alt="" /></div><div class="info"><h5>Total Confirmed</h5><h3>{totalconfirmed }</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-green.svg" alt="" /></div><div class="info"><h5>Total Recovered</h5><h3>{totalrecovered }</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-red.svg" alt="" /></div><div class="info"><h5>Total Deaths</h5><h3>{ totaldeath}</h3></div></div></div>
                    </div>

                </div>
            </div>
        </>
    )
}
