import axios from 'axios'
const PRODUCTION_URL = "" // https://www.baidu.com/node/
export const AXIOS_BASE_URL = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : 'http://localhost:12001/'
export const FAAS_BASE_URL = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : 'http://localhost:12001/'
axios.defaults.baseURL = AXIOS_BASE_URL

export const http = axios