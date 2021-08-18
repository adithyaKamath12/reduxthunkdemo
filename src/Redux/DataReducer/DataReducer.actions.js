import { FETCHDATA,FETCHDATASUCCESS,FETCHDATAFAILED } from "./DataReducer.const";


export const fetchData=()=>{
    return{
        type:FETCHDATA
    }
}

export const getDataSuccess=(data)=>{
    return{
        type:FETCHDATASUCCESS,
        payload:data
    }
}

export const getDataFailed=(data)=>{
    return{
        type:FETCHDATAFAILED,
        payload:data
    }
}

export const getPeopleInformationAsync=({text,type})=>{

    // console.log(text,type,"da");
    return async(dispatch)=>{
        
        dispatch(fetchData())

        await fetch('https://swapi.dev/api/'+type+'/?search='+text)
        .then(res=>res.json())
        .then(res=>dispatch(getDataSuccess(res.results)))
        .catch(err=>dispatch(getDataFailed(err.message)))
    }
    
}

