import React from 'react'
import { FETCHDATA,FETCHDATAFAILED,FETCHDATASUCCESS } from "./DataReducer.const";



const initialState={
    data:[],
    fetching:false,
    error:null,
    flag:0,
}

function DataReducer(state=initialState,action) {
   switch (action.type) {
       case FETCHDATA: return{
           ...state,
           fetching:true,
           flag:1
       }
           
       case FETCHDATASUCCESS: return{
           ...state,
        data:[...action.payload],
        fetching:false,
        error:''
    }

    case FETCHDATAFAILED: return{
        ...state,
        fetching:false,
        error:action.payload
    }
       default:return state
   }
}

export default DataReducer
