import json
from datetime import datetime

class SampleData(object):
    def __init__(self):
        self.__dateTime = str(datetime.now())
        self.__value1 = 0.0
        self.__value2 = 0.0
        self.__value3 = 0.0

    # getters
    def get_dateTime(self):
        return self.__dateTime
    
    def get_value1(self):
        return self.__value1
    
    def get_value2(self):
        return self.__value2

    def get_value3(self):
        return self.__value3
    
    # setters
    def set_dateTime(self, value):
        self.__dateTime = value

    def set_value1(self, value):
        self.__value1 = value

    def set_value2(self, value):
        self.__value2 = value
    
    def set_value3(self, value):
        self.__value3 = value

    def __repr__(self):
        repr = "{0}, {1}, {2}, {3}".format(
            { self.__dateTime },
            { self.__value1 },
            { self.__value2 },
            { self.__value3 }
        )
        return repr

    def toJson(self):
        return json.dumps(self.__dict__)