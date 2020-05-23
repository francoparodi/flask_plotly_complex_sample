function plotlyInit() {
    var layout = {title: 'Random Data', 
                    showlegend: true, 
                    legend: { 'orientation': 'h' }, 
                    displayModeBar: true, 
                    /*paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)', 
                    */
                   /*margin: {
                        l: 60,
                        r: 0,
                        b: 0,
                        t: 30,
                        pad: 0
                      },*/
                    /*colorway : ['#ff0000', '#0044ff', '#71e632'],*/
                    /*xaxis: {
                        autorange: true,
                        showgrid: true,
                        zeroline: false,
                        showline: true,
                        autotick: true,
                        ticks: '',
                        showticklabels: true
                      },
                    yaxis: {
                        autorange: true,
                        showgrid: true,
                        zeroline: false,
                        showline: true,
                        autotick: true,
                        ticks: '',
                        showticklabels: true
                      }*/

                };

    var initData = [
        {y:[0], name: 'Value1', mode: 'lines' }, 
        {y:[0], name: 'Value2', mode: 'lines' }, 
        {y:[0], name: 'Value3', mode: 'lines' }
    ];

    Plotly.plot('graphId', initData, layout);
}

function plotlyDataUpdate(value1, value2, value3) {
    Plotly.extendTraces('graphId', 
        { y: [[value1], [value2], [value3]] }, [0, 1, 2] );
}