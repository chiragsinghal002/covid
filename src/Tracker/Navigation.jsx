import React from 'react'
import { createContext } from 'react';
import {Link, useHistory} from 'react-router-dom'

export default function Navigation() {
    
    const history=useHistory();
    const pathname=history.location.pathname;
    //console.log(history)
    let active3;let active1;let active2;let active4;let active5;let active6,active7;
    if(pathname==='/tracker/3'){
         active3='active'
    }
    if(pathname==='/tracker/2'){
        active1='active'
    }
    if(pathname==='/tracker/1'){
        active2='active'
    }
    if(pathname==='/tracker/4'){
        active4='active'
    }
    if(pathname==='/tracker/5'){
        active5='active'
    }
    if(pathname==='/tracker/6'){
        active6='active'
    }
    if(pathname==='/tracker/7'){
        active7='active'
    }

    return (
       <>
            <nav className="navigation">
                        <div className="container pl-0 pr-0">
                            <div className="nav-content">
                                <ul>
                                    <li className="logo"><Link to={"/"}><img src="/images/coronavirus.png" alt="logo" /></Link></li>
                                    <li><Link to={"/tracker/1"} className={active2 +' '+"nav-content-bttn"}><span className="circle-icon bg-warning"></span><i className="ti-pie-chart"></i></Link></li>
                                    <li><Link to={"/tracker/2"} className={active1 +' '+"nav-content-bttn"} data-tab="table" ><span className="circle-icon bg-danger"></span><i className="ti-view-list"></i></Link></li>
                                    <li><Link to={"/tracker/3"} className={active3 +' '+"nav-content-bttn"} data-tab="tiles"><i className="ti-view-grid"></i></Link></li>
                                    <li><Link to={"/tracker/4"} className={active4 +' '+"nav-content-bttn"} data-tab="country-wise"><i className="ti-layout-tab"></i></Link></li>
                                    <li><Link to={"/tracker/5"} className={active5 +' '+"nav-content-bttn"} data-tab="widgets"><i className="ti-layers-alt"></i></Link></li>
                                    <li><Link to={"/tracker/6"} className={active6 +' '+"nav-content-bttn"} data-tab="charts"><i className="ti-stats-up"></i></Link></li>
                                    <li><Link to={"/tracker/7"} className={active7 +' '+"nav-content-bttn"} data-tab="continent" id="continentTab"><i className="ti-world"></i></Link></li>
                                    <li className="flex-lg-brackets"><Link href="#" data-tab="blog" className="nav-content-bttn"><i className="ti-comment"></i></Link></li>
                                    <li className="night-mode"><Link href="#"><i className="ti-flickr-alt"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
       </>
    )
}
