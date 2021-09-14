import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

export default function CountryWise() {
    const [state, setstate] = useState([])
    const [statedata, setstatedata] = useState([])
    const [choosestate, setchoosestate] = useState([])
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/v2/state_district_wise.json').then(function (response) {
            //console.log(response);
            setstatedata(response.data);
            setstate(response.data);
        }).catch(function (error) {

        })
    }, [])

    function changeState(value) {
        //console.log(statedata);
        // console.log(value);

        statedata.filter((data) => {
            if (data.statecode === value) {
                //console.log(data.districtData)
                setchoosestate(data.districtData);
            }
        })
    }
    return (
        <>
            <div class="chat-content active" id="tiles" tabindex="4" style={{ overflow: "hidden", outline: "none", display: "block" }}>
                <div className="d-flex justify-content-between country-stat-select align-items-center">
                    <div class="country-select-box">
                        <select className="country-picker" style={{ display: "block" }} onChange={(e) => changeState(e.target.value)}>
                            <option value="">{'----Select----'}</option>
                            {
                                state.map((data) =>
                                    <option value={data.statecode}>{data.state}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <h1 class="stat-head">Top 10 District wise Covid-19 Updates</h1>
                <div class="row" id="TopCountryStats">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>District</th>
                                <th>Active Case</th>
                                <th>Confirmed</th>
                                <th>Recoverd</th>
                                <th>Deaths</th>
                                <th>DeltaConfirmed</th>
                                <th>Notes</th>
                                {/* <th>LastUpdated</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                choosestate.map((data, key) =>

                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{data.district}</td>
                                        <td>{data.active}</td>
                                        <td>{data.confirmed}</td>
                                        <td>{data.recovered}</td>
                                        <td>{data.deceased}</td>
                                        <td>{data.delta.confirmed}</td>
                                        <td>{data.notes}</td>
                                    </tr>
                                )
                            }





                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}