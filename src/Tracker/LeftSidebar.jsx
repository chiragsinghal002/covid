import React, { useEffect, useState, useContext } from 'react'
import { apidata } from '../Tracker'
export default function LeftSidebar() {
    const api = useContext(apidata);
    // useEffect(() => {
    //     console.log(api);
    // }, [api]);
    //console.log(api);
    function img(value) {
        return "https://disease.sh/assets/img/flags/" + value.toLowerCase() + ".png";
    }
    return (
        <>

            <div className="left-sidebar content-scroll" style={{ overflow: "auto", outline: "none;" }}>
                <div className="sidebar active">
                    <div className="text-left mb-2 mt-3">
                        <h2 className="title-text">COVID-19 Tracker</h2>
                    </div>
                    <ul className="profile-detail list-inline pt-2">
                        <li className="list-block-item text-left">
                            <h6 className="mb-0">Total Case</h6>
                            <small className="text-danger mb-0 dz-g-confirmed">{api.total_case_confirmed}</small>
                            <b className="dz-g-today-confirmed">+{api.new_case_confirmed}</b>
                        </li>
                        <li className="list-block-item text-left">
                            <h6 className="mb-0">Active Case</h6>
                            <small className="text-warning mb-0 dz-g-active">{api.total_case_confirmed - api.total_recover - api.total_death}</small>

                        </li>
                        <li className="list-block-item text-left">
                            <h6 className="mb-0">Recovered </h6>
                            <small className="text-success mb-0 dz-g-recovered">{api.total_recover}</small>
                            <b className="dz-g-today-recovered">+{api.new_recover}</b>
                        </li>
                        <li className="list-block-item text-left">
                            <h6 className="mb-0">Deaths Case</h6>
                            <small className="text-primary mb-0 dz-g-deaths">{api.total_death}</small>
                            <b className="dz-g-today-deaths">+{api.new_death}</b>
                        </li>
                    </ul>
                    <h4 className="dz-title">Today Country Case</h4>
                    <ul className="country-list list-inline">

                        {
                            api.country.map((data) =>

                                (data.NewConfirmed > 2000) ?

                                    <>
                                        <li className="list-block-item" data-country-code={data.CountryCode}>
                                            <img src={img(data.CountryCode)} alt="" />
                                            <span>{data.Country}</span>
                                            <h6 className="dz-confirmed">{data.NewConfirmed}</h6>
                                        </li>
                                    </>
                                    :
                                    <>

                                    </>


                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}
