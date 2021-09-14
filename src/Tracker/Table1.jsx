import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap'
import axios from 'axios'
import { state } from '../State'
import ClipLoader from "react-spinners/PulseLoader";


export default function Table1() {
    const [statelist, setStatelist] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json')
            .then(function (response) {
                 //console.log(response);
                setStatelist(response.data.statewise);
                // setDataList(response.data);
                //    state.map((state)=>{
                //        //console.log(response.data.state.name);
                //    })

            })
            .catch(function (error) {

            }).then(function(){
                setLoading(true);
            })
    }, [])
    //console.log(datalist);


    return (
        <>
            <div class="chat-content" id="table" style={{ display: "block" }}>
                <div className="d-flex justify-content-between country-stat-select align-items-center">
                    {/* <div class="country-select-box">
                        <select className="country-picker" style={{ display: "block" }}>
                            <option value="">{'----Select----'}</option>
                            {
                                state.map((data) =>
                                    <option value={data.key}>{data.name}</option>
                                )
                            }
                        </select>

                    </div> */}
                </div>
                <div class="widget-area">
                    <div class="widget-head">
                        <h1 class="dez-title">Covid-19 State Wise Data</h1>
                    </div>

                    {
                        loading?
                        <div class="widget-body">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>State</th>
                                    <th>Active Case</th>
                                    <th>Confirmed</th>
                                    <th>Recoverd</th>
                                    <th>Deaths</th>
                                    <th>DeltaConfirmed</th>
                                    <th>MigratedOther</th>
                                    {/* <th>LastUpdated</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    statelist.map((data,key) =>
                                        <tr>
                                            <td>{key + 1}</td>
                                            <td>{data.state}</td>
                                            <td>{data.active}</td>
                                            <td>{data.confirmed}</td>
                                            <td>{data.recovered}</td>
                                            <td>{data.deaths}</td>
                                            <td>{data.deltaconfirmed}</td>
                                            <td>{data.migratedother}</td>
                                        </tr>
                                    )
                                }



                            </tbody>
                        </Table>
                    </div>
                        :

                        <ClipLoader/>
                    }
                    
                </div>
            </div>

        </>
    )
}
