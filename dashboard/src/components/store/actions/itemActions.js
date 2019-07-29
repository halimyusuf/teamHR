import { get, post } from '../../../config/apiRequest'


export const createItem = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/item`, credentials).then((response) => {
            console.log("Create Item reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_ITEM_ERROR", response });
                if (typeof cb === "function") cb({ type: "CREATE_ITEM_ERROR", response });
                localStorage.setItem('ITEM', JSON.stringify(response.data));
            } else {
                dispatch({ type: "CREATE_ITEM_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}


export const getItems = (cb) => {
    return (dispatch) => {
        get('/item').then(response => {
            console.log("MY  ITEM is here", response);
            if (response.statuscode === 200) {
                dispatch({ type: "FETCH_ITEM_RESPONSE", response });
                if (typeof cb === "function") cb({ type: "FETCH_ITEM_RESPONSE", response });
            } else {
                dispatch({ type: "FETCH_ITEM_RESPONSE", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}

export const getCategory = (cb) => {
    return (dispatch) => {
        get('/category').then(response => {
            console.log("MY  CATEGORY is here", response);
            if (response.statuscode === 200) {
                dispatch({ type: "FETCH_CATEGORY_RESPONSE", response });
                if (typeof cb === "function") cb({ type: "FETCH_CATEGORY_RESPONSE", response });
            } else {
                dispatch({ type: "FETCH_CATEGORY_RESPONSE", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}