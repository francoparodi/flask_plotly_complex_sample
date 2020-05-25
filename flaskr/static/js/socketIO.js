function socketIOinit() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('connect', function() {
        console.log('Websocket connected!');
    });
    
    //start daemon to read temperature
    socket.emit('handleDaemon', {name: '1', action: 'START'});

    socket.on('daemonProcess', function(data) {
        var jObj = JSON.parse(data);
        var value1 = jObj._SampleData__value1;
        var value2 = jObj._SampleData__value2;
        var value3 = jObj._SampleData__value3;
        console.log(jObj);

        plotlyDataUpdate_line(value1, value2, value3);
        plotlyDataUpdate_bar(value1, value2, value3);
        plotlyDataUpdate_surface(value1, value2, value3);
    });
}