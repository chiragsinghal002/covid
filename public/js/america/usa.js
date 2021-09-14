

$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://pomber.github.io/covid19/timeseries.json',
        dataType: "json",
        success: function (data) {
            // console.log(data);
            var cnfr = data.US.slice(Math.max(data.US.length - 30, 1)).map(x => x.confirmed);
            var deth = data.US.slice(Math.max(data.US.length - 30, 1)).map(x => x.deaths);
            var reco = data.US.slice(Math.max(data.US.length - 30, 1)).map(x => x.recovered);
            var labl = data.US.slice(Math.max(data.US.length - 30, 1)).map(function (x) {
                
                const d = new Date(x.date)
                const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
                const [{ value: mo }, , { value: da }] = dtf.formatToParts(d)
                return `${da}-${mo}`
            });

            //line chart
            var ctx = document.getElementById("usa_timeseries");
            ctx.height = 100;
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labl,
                    datasets: [
                        {
                            label: "Confirmed",
                            borderColor: "#3639AE",
                            borderWidth: "2",
                            backgroundColor: "transparent",
                            pointBackgroundColor: "#3639AE",
                            data: cnfr
                        },
                        {
                            label: "Death",
                            borderColor: "#ff0000",
                            borderWidth: "2",
                            backgroundColor: "transparent",
                            pointBackgroundColor: "#ff0000",
                            data: deth
                        },
                        {
                            label: "Recovered",
                            borderColor: "#82c519",
                            borderWidth: "2",
                            backgroundColor: "transparent",
                            pointBackgroundColor: "#82c519",
                            data: reco
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            // padding: 50,
                        },
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                color: '#F7F8FC'
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                color: '#F7F8FC'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                    },

                }
            });

        }
    })

})




