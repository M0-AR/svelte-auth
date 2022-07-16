import axios from "axios";
import {trim_end} from "svelte/types/compiler/utils/trim";

axios.defaults.baseURL = 'http://localhost:8000/api/';

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;

        const {data, status} = await axios.post('refresh', {}, {withCredentials: true});

        if (status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            return axios(error.config);
        }
    }

    refresh = false;
    return error;
});