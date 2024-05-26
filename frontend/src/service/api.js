import { dataSekolahActions, tambahSekolahActions } from "@root/redux/actions";
import axios from "axios";

const BaseApi = axios.create({
    // baseURL: 'http://10.0.2.2:8000',
    baseURL: 'http://192.168.8.100:8000',
    withCredentials: true
})

export const fetchDataSekolah = () => {
    return async dispatch => {
        dispatch(dataSekolahActions.request())
        try {
            const { data } = await BaseApi.get('api/schools')
            dispatch(dataSekolahActions.success(data))
        } catch (error) {
            console.log(error);
            dispatch(dataSekolahActions.failure(error.response.data))
        }
    }
}

export const fetchTambahSekolah = (value) => {
    return async dispatch => {
        dispatch(tambahSekolahActions.request())
        try {
            const { data } = await BaseApi.post('api/schools', value)
            dispatch(tambahSekolahActions.success(data.success))
        } catch (error) {
            dispatch(tambahSekolahActions.failure(error.response.data.errors))
        }
    }
}