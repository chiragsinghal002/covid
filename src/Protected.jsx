import React from 'react'
import Table from './Tracker/Table'
import Tiles from './Tracker/Tiles'
import CountryWise from './Tracker/CountryWise'
import Charts from './Tracker/Charts'
import Contament from './Tracker/Contament'
import { useHistory } from 'react-router-dom'

export default function Protected(props) {
    let Page=props.value;
    // if (path == '/tracker/1') {
    //     let Page = Table
    // }

    return (
        <>

            <Page />

            {/* <Tiles />
            <CountryWise />
            <Charts />
            <Contament /> */}
        </>
    )
}
