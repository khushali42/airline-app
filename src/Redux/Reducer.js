const initialState = [{
    loading: false,
    robots: [],
    error: ''
}]

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_AIRLINE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_AIRLINE_SUCCESS':
            {
            console.log('fetch airline reducer')
            return {
                airlines: action.payload
            }
        }
        case 'FETCH_AIRLINE_FAIL':
            return {
                loading: false,
                airlines: [],
                error: action.payload
            }
        default : 
            return state
    }
}

// export const filterReducer = (state= initialState) => {

// }