import React from 'react'

export default function Widget() {
    return (
        <>
            <div class="chat-content active" id="widgets" tabindex="6" style={{overflow: "hidden", outline: "none",display:"block"}}>
                <div class="row" id="widgetDiv"><div class="col-xl-6 col-lg-12 col-md-12"><div class="country-widget widget-area"> <div class="widget-head"> <h4 class="dez-title"><span><img src="https://disease.sh/assets/img/flags/af.png" width="50" /></span>Afghanistan</h4> </div><div class="widget-body" id="widget-body"> <div class="row"> <div class="col text-primary info"> <span>Cases</span> <h4>147985</h4> </div><div class="col text-danger info"> <span>Death</span> <h4>6774</h4> </div><div class="col text-success info"> <span>Recovered</span> <h4>99449</h4> </div><div class="col text-danger info"> <span>Today Death</span> <h4>37</h4> </div><div class="col text-secondary info"> <span>Today Cases</span> <h4>484</h4> </div><div class="col text-warning info"> <span>Critical</span><h4>1124</h4> </div><div class="col text-info info"> <span>Active Cases</span> <h4>41762</h4> </div></div></div></div></div></div></div>

        </>
    )
}
