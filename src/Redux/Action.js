import axios from "axios"

export const fetchAirlineRequest = () =>{
    return {
        type: "FETCH_AIRLINE_REQUEST"
    }
}

export const fetchAirlineSuccess = (airlines) => {
    console.log('action robots...',airlines) 
   return{
        type: 'FETCH_AIRLINE_SUCCESS',
        payload: airlines
    }
}

export const fetchAirlineFail = (err) =>{
    return {
        type: 'FETCH_AIRLINE_FAIL',
        payload: err
    }
}

export const fetchAirlines = (url) => {
    return function (dispatch) {
        dispatch(fetchAirlineRequest);
        axios.get(url)
        .then((res)=>{
            // console.log("action creator called");
            dispatch(fetchAirlineSuccess(res.data))
            return res.data
        })
        .catch((err)=>{
            dispatch(fetchAirlineFail(err.message))
        })
    }
}