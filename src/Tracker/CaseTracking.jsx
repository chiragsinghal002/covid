import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import ClipLoader from "react-spinners/PulseLoader";




export default function CaseTracking() {
    const [dataList, setdataList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/raw_data.json').then(function (response) {
            //console.log(response.data.raw_data);
            setdataList(response.data.raw_data);


        }).catch(function (error) {

        }).then(function () {
            setLoading(true);
            

        })

    }, [])
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
                        <h1 class="dez-title">Covid-19 Patient Tracking India</h1>

                    </div>

                    {
                        loading ?
                            <div class="widget-body">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Nationality</th>
                                            <th>No of Cases</th>
                                            <th>Notes</th>
                                            <th>Sources</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            dataList.map((data, key) =>
                                                key < 10 ?
                                                    <>
                                                        <tr>
                                                            <td>{data.dateannounced}</td>
                                                            <td>{data.detectedstate}</td>
                                                            <td>{data.detectedcity}</td>
                                                            <td>{data.nationality}</td>
                                                            <td>{data.numcases}</td>
                                                            <td>{data.notes}</td>
                                                            <td><a href={data.source1} target="_blank">{'Source1'}</a></td>
                                                        </tr>
                                                    </>
                                                    :
                                                    <>

                                                    </>


                                            )
                                        }






                                    </tbody>
                                </Table>
                            </div>
                            :
                            <>
                                <ClipLoader/>
                            </>

                    }

                </div>
            </div>
        </>
    )
}
