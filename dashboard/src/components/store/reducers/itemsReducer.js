const initState = {
    itemStatus: null,
    itemMessage: null,
    itemData: null,
    categoryMessage: null,
    categoryData: null,
    categoryStatus: null
}

export const itemReducer = (state = initState, action) => {
    switch (action.type) {

        case "CREATE_ITEM_SUCCESS":
            return {
                ...state,
                itemData: action.response.data,
                itemMessage: action.response.message,
                itemStatus: action.response.status
            }

        case "CREATE_CATEGORY_SUCCESS":
            return {
                ...state,
                categoryData: action.response.data,
                categoryMessage: action.response.message,
                categoryStatus: action.response.status
            }



        case "CREATE_CATEGORY_ERROR":
            return {
                ...state,
                categoryData: action.response.data,
                categoryMessage: action.response.message,
                categoryStatus: action.response.status
            }

        case "FETCH_ITEM_RESPONSE":
            return {
                ...state,
                itemData: action.response.data,
                itemMessage: action.response.message,
                status: action.response.status
            }

        case "FETCH_CATEGORY_RESPONSE":
            return {
                ...state,
                categoryData: action.response.data,
                categoryMessage: action.response.message,
                categoryStatus: action.response.status
            }

        default:
            return state;
    }
}


export default itemReducer