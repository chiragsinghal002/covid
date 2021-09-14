import React, { useState, useEffect, Suspense, lazy } from 'react'
import Navigation from './Tracker/Navigation';
import LeftSidebar from './Tracker/LeftSidebar';
import Preloader from './Preloader';
import Charts from './Tracker/Charts';
import Table1 from './Tracker/Table1'
import Tiles from './Tracker/Tiles'
import Widget from './Tracker/Widget'
import axios from 'axios'
import { createContext } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import CountryWise from './Tracker/CountryWise';
import CaseTracking from './Tracker/CaseTracking';
export const apidata = createContext();

export default function Tracker() {
    const history = useHistory();
    const param = useParams();
    // console.log(param);
    const [newconfirm, setNewConfirmed] = useState(0);
    const [totalConfirmed, settotalConfirmed] = useState(0);
    const [totalRecover, settotalRecover] = useState(0);
    const [newRecover, setnewRecover] = useState(0);
    const [totalDeath, settotalDeath] = useState(0);
    const [newTotalDeath, setnewTotalDeath] = useState(0);
    const [country, setCountry] = useState([]);
    let Path,OtherComponent;
    
    // const pathname=history.location.pathname;
    // console.log(pathname);
    if (param.id === '1') {
        Path = <Charts />;
        OtherComponent = React.lazy(() => import('./Tracker/Charts'));
    } else if (param.id === '2') {
        Path = <Table1 />;
        OtherComponent = React.lazy(() => import('./Tracker/Table1'));
    } else if (param.id === '3') {
        Path = <Tiles />;
        OtherComponent = React.lazy(() => import('./Tracker/Tiles'));
    } else if (param.id === '4') {
        Path = <Widget />;
        OtherComponent = React.lazy(() => import('./Tracker/Widget'));
    } else if (param.id === '5') {
        Path = <CountryWise />;
        OtherComponent = React.lazy(() => import('./Tracker/CountryWise'));
    } else if (param.id === '6') {
        OtherComponent = React.lazy(() => import('./Tracker/CaseTracking'));
    } else if (param.id === '7') {
        Path = <CaseTracking />;
        OtherComponent = React.lazy(() => import('./Tracker/CaseTracking'));
        
    }else{

    }

    

    // const OtherComponent = React.lazy(() => import(Path));
    // console.log(OtherComponent);

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(function (response) {
                // handle success
                //console.log(response);
                const data = response.data.Global;
                setCountry(response.data.Countries);
                setNewConfirmed(data.NewConfirmed);
                settotalConfirmed(data.TotalConfirmed);
                settotalRecover(data.TotalRecovered);
                setnewRecover(data.NewRecovered);
                setnewTotalDeath(data.NewDeaths);
                settotalDeath(data.TotalDeaths);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])
    return (
        <>
            <body>
                {/* <Preloader /> */}
                <div className="main-admin">
                    <Navigation />
                    <div className="right-content">
                        <apidata.Provider value={{ "country": country, "total_case_confirmed": totalConfirmed, "new_case_confirmed": newconfirm, "total_recover": totalRecover, "new_recover": newRecover, "total_death": totalDeath, "new_death": newTotalDeath }}>
                            <LeftSidebar />
                            {/* {Path} */}
                            <Suspense fallback={<div>Loading...</div>}>
                                <OtherComponent />
                            </Suspense>
                        </apidata.Provider>
                    </div>
                </div>
            </body>
        </>
    )
}
