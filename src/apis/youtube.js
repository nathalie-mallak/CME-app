import axios from 'axios'
const KEY = 'AIzaSyDOLhTCu01AOISOMQ_dSOBHqMKzE9g7rew'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})