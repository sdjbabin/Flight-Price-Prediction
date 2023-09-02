import json

import json
import pickle
import numpy as np

__airline=None
__source=None
__dep=None
__stops=None
__arri=None
__des=None
__cls=None
__data_columns=None
__model=None

def get_airline():
    return __airline

def get_source():
    return __source

def get_dep():
    return __dep

def get_stops():
    return __stops

def get_arri():
    return __arri

def get_des():
    return __des

def get_cls():
    return __cls
def predict_price(arr, days_left):
#     arr=['airline', 'source_city', 'departure_time', 'stops', 'arrival_time',
#     'destination_city', 'class']
    x1=np.zeros(len(__data_columns))
    x1[0]=days_left
    for i in arr:
        try:
            loc_index=__data_columns.index(i.lower())
        except:
            loc_index=-1
        if loc_index>=0:
            x1[loc_index]=1
    return round(__model.predict([x1])[0])
def load_saved_artifacts():
    print("loading saved artifacts..start")
    global __data_columns
    global __airline, __source, __dep, __stops, __arri, __des, __cls

    global __model
    with open('./artifacts/columns.json','r')as f:
        __data_columns=json.load(f)['data_columns']
        __airline=__data_columns[1:6]
        __source=__data_columns[6:11]
        __des=__data_columns[11:16]
        __dep=__data_columns[16:21]
        __stops=__data_columns[21:23]
        __cls=__data_columns[23:24]
        __arri=__data_columns[24:29]
    with open('./artifacts/flight_price_pred_model.pickle','rb') as f:
        __model=pickle.load(f)
        print('Loading saved artifacts..')
if __name__=='__main__':
    load_saved_artifacts()
    # print(get_airline())
    print(predict_price(['Vistara','Chennai','Early_Morning','one','ar_Morning','Hyderabad_d','Business'],30))
