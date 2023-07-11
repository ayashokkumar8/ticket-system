// Import third parts
import Axios from "axios";
// Import custom
import {
IFetchRequestFn,
IPosthRequestFn,
IPutRequestFn,
IDeleteRequestFn,
ApiUrls,
} from "./interface";



/**
 * Define API Base url based on NODEJS Enviroment: dev o prod, so localhost or server ip
 */

export const urls: ApiUrls = {
    development: "http://localhost:3001",
    test: "http://localhost:3001",
    production: ''
    // production: `https://api.${
    //   typeof window !== "undefined"
    //     ? window.location.hostname.replace("www.", "")
    //     : deployUrl
    // }`,
};

/**
 * Initialize Axios instance.
 */
const axiosInstance = Axios.create({
    baseURL: urls[window.process?.env?.NODE_ENV || "development"],
});


// reusable fetch request function.
export const fetchData: IFetchRequestFn = async (url, options = {}): Promise<any> => {
    return await axiosInstance.get(url, options)
        .then((response: any) => {
            return response.data;
        }).catch((error: any) => {
            return error.data;
        })
};

// reusable post request function.
export const postData: IPosthRequestFn = async (url, data, options = {}): Promise<any> => {
    return await axiosInstance.post(url, data, options)
        .then((response: any) => {
            return response.data;
        }).catch((error: any) => {
            return error.data;
        })
};

// reusable put request function.
export const putData: IPutRequestFn = async (url, data, options = {}): Promise<any> => {
    return await axiosInstance.put(url, data, options)
        .then((response: any) => {
            return response.data;
        }).catch((error: any) => {
            return error.data;
        })
};

// reusable delete request function.
export const deleteData: IDeleteRequestFn = async (url, options = {}): Promise<any> => {
    return await axiosInstance.delete(url, options)
        .then((response: any) => {
            return response.data;
        }).catch((error: any) => {
            return error.data;
        })
};

export default axiosInstance;