function plotlyInit_line() {
    var layout = {title: 'LINE', 
                    showlegend: true, 
                    legend: { 'orientation': 'v' }, 
                    displayModeBar: true, 
                    xaxis: {
                        title: 'Time',
                        autorange: true,
                        showgrid: true,
                        zeroline: false,
                        showline: true,
                        autotick: true,
                        tickangle: 90,
                        ticks: '',
                        showticklabels: true
                      },
                    yaxis: {
                        title: 'Values',
                        autorange: true,
                        showgrid: true,
                        zeroline: false,
                        showline: true,
                        autotick: true,
                        ticks: '',
                        showticklabels: true
                      }

                };

    // LINE
    var time = new Date();
    var initData = [
        {x:[time], y:[0], name: 'Value1', mode: 'lines'}, 
        {x:[time],y:[0], name: 'Value2', mode: 'lines'}, 
        {x:[time],y:[0], name: 'Value3', mode: 'lines'}
    ];

    Plotly.plot('graphId_line', initData, layout);
}

function plotlyDataUpdate_line(value1, value2, value3) {
    var time = new Date();
    Plotly.extendTraces('graphId_line', 
        {x: [[time], [time], [time]], y: [[value1], [value2], [value3]] }, [0, 1, 2] );
}

function plotlyInit_bar() {
  var layout = {title: 'BAR', 
                  showlegend: true, 
                  legend: { 'orientation': 'v' }, 
                  displayModeBar: true, 
                  xaxis: {
                      title: 'Time',
                      autorange: true,
                      showgrid: true,
                      zeroline: false,
                      showline: true,
                      autotick: true,
                      tickangle: 90,
                      ticks: '',
                      showticklabels: true
                    },
                  yaxis: {
                      title: 'Values',
                      autorange: true,
                      showgrid: true,
                      zeroline: false,
                      showline: true,
                      autotick: true,
                      ticks: '',
                      showticklabels: true
                    }

              };

  // BAR
  var time = new Date();
  var initData = [
      {x:[time], y:[0], name: 'Value1', mode: 'lines', type: 'bar'}, 
      {x:[time],y:[0], name: 'Value2', mode: 'lines', type: 'bar'}, 
      {x:[time],y:[0], name: 'Value3', mode: 'lines', type: 'bar'}
  ];

  Plotly.plot('graphId_bar', initData, layout);
}

function plotlyDataUpdate_bar(value1, value2, value3) {
  var time = new Date();
  Plotly.extendTraces('graphId_bar', 
      {x: [[time], [time], [time]], y: [[value1], [value2], [value3]] }, [0, 1, 2] );
}

function plotlyInit_surface() {

  var x_data=[1,2,3];
  var y_data=[2,4,6];
  var z_data=[x_data,y_data];

      var data = [{
                z: z_data,
                type: 'surface'
              }];
        
      var layout = {
        title: '3D SURFACE',
        autosize: false,
        width: 700,
        height: 700,
        margin: {
          l: 65,
          r: 50,
          b: 65,
          t: 90,
        }
      };
      console.log(data);

      Plotly.plot('graphId_surface', data, layout);

}

function plotlyDataUpdate_surface(value1, value2, value3) {


}