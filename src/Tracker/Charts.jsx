import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { apidata } from '../Tracker'

export default function Charts() {
    const api = useContext(apidata);
    const [countries, setcountries] = useState([]);
    const [loading, setloading] = useState(false)
    const [dropdown, setdropdown] = useState("")
    const [totalConfirmed, settotalConfirmed] = useState(0)
    const [totalRecovered, settotalRecovered] = useState(0)
    const [totalDeath, settotalDeath] = useState(0)
    const [newDeath, setNewDeath] = useState(0)
    //console.log(api);

    useEffect(async () => {
        const countries1 =await  api.country;
        setcountries(countries1);
       // console.log(countries1);

    },[api])
      
     



    function country(value) {
        //console.log(value)
        countries.map((data) => {
            if (data.CountryCode === value) {
                settotalConfirmed(data.TotalConfirmed)
                settotalRecovered(data.TotalRecovered)
                settotalDeath(data.TotalDeaths)
                setNewDeath(data.NewDeaths)

            }
        }
        )
    }



    return (
        <>
            <div className="chat-content" id="charts" style={{ display: "block" }}>
                <div className="row">
                    <div className="d-flex justify-content-between country-stat-select align-items-center">
                        <div class="country-select-box">
                            <select className="country-picker" style={{ display: "block" }} onChange={(e) => country(e.target.value)}>
                            <option value="">{'----Select----'}</option>
                                {
                                    api.country.map((data, index) =>
                                        <option value={data.CountryCode} key={index}>{data.Country}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div id="globalStateRow" class="all-country-stat d-flex">
                        <div class="col">
                            <div class="icon-box">
                                <div class="icon"><img src="/images/icons/covid-defult.svg" alt="" /></div><div class="info"><h5>Total Confirmed</h5><h3>{totalConfirmed}</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-green.svg" alt="" /></div><div class="info"><h5>Total Recovered</h5><h3>{totalRecovered}</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-red.svg" alt="" /></div><div class="info"><h5>Total Deaths</h5><h3>{totalDeath}</h3></div></div></div><div class="col"><div class="icon-box"><div class="icon"><img src="/images/icons/covid-redark.svg" alt="" /></div><div class="info"><h5>New Deaths</h5><h3>{newDeath}</h3></div></div></div><div class="col"><div class="icon-box"></div></div></div>
                </div>
            </div>
        </>
    )
}
