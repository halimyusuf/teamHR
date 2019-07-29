import { get, post } from '../../../config/apiRequest'


export const createNews = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/news`, credentials).then((response) => {
            console.log("Create news reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_NEWS_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "CREATE_NEWS_SUCCESS", response });
                localStorage.setItem('news', JSON.stringify(response.data));
            } else {
                dispatch({ type: "CREATE_NEWS_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}


export const getNews = (cb) => {
    return (dispatch) => {
        get('/news').then(response => {
            console.log("MY new News is here", response);
            if (response.statuscode === 200) {
                dispatch({ type: "FETCH_NEWS_RESPONSE", response });
                if (typeof cb === "function") cb({ type: "FETCH_NEWS_RESPONSE", response });
            } else {
                dispatch({ type: "FETCH_NEWS_RESPONSE", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}


export const createCategory = (credentials, cb) => {
    return (dispatch, getState) => {
        post(`/category`, credentials).then((response) => {
            console.log("Create category reponse ()=>", response);
            if (response.status === "Success") {
                dispatch({ type: "CREATE_CATEGORY_SUCCESS", response });
                if (typeof cb === "function") cb({ type: "CREATE_CATEGORY_SUCCESS", response });
                localStorage.setItem('category', JSON.stringify(response.data));
            } else {
                dispatch({ type: "CREATE_CATEGORY_ERROR", response });
                if (typeof cb === "function") cb();
            }
        })
    }
}

