import axios from 'axios'
import { ENDPOINT_URL } from '../constants'

const GetRequest = ()=>{
    return axios.get(`${ENDPOINT_URL}`,{
        headers:{
            
        }
    })
}

export default GetRequest