from datetime import datetime
import threading, time, json, random
from flask import current_app as app
from flask import Blueprint, render_template, request, copy_current_request_context
from flaskr.models import SampleData

from flask_socketio import SocketIO

socketio = SocketIO()

stop_event = threading.Event()
daemon = threading.Thread()
isDaemonStarted = False

sampleData = SampleData()

view = Blueprint("view", __name__)

@view.route("/")
def homepage():
    return render_template("homepage.html")

@socketio.on('connect')
def on_connect():
    setSampleDataValues()
    socketio.emit('daemonProcess', getSampleData().toJson())

@socketio.on('handleDaemon')
def on_handleDaemon(data):
    action=data['action']

    @copy_current_request_context
    def daemonProcess(name, stop_event):
        while not stop_event.is_set():
            setSampleDataValues()
            socketio.emit('daemonProcess', getSampleData().toJson())
            time.sleep(1)

    global isDaemonStarted
    if action == 'START':
        if not isDaemonStarted:
            daemon.__init__(target=daemonProcess, args=(__name__, stop_event), daemon=True)
            daemon.start()
            isDaemonStarted = True
    else:
        stop_event.set()
        daemon.join()
        stop_event.clear()
        isDaemonStarted = False

def setSampleDataValues():
    getSampleData().set_dateTime(str(datetime.now()))
    getSampleData().set_value1(round(random.uniform(-30,30), 1)) 
    getSampleData().set_value2(round(random.uniform(-20,20), 1))
    getSampleData().set_value3(round(random.uniform(-10,10), 1))

def getSampleData():
    return sampleData

