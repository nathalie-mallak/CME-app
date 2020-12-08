import React, { useState } from 'react'
import Header from '../header/header'
import Search from '../search/search'
import youtube from '../../apis/youtube'
import VideoList from '../videoList'
import VideoDetails from '../videoDetails'
import { Grid, makeStyles } from '@material-ui/core'
import './page1.css'

const Page1 = () => {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const searchVideo = async (searchedVideo) => {
        // API call
        //sending a get request to the youtube api: response status:200
        const response = await youtube.get('/search', {
            params: {
                q: searchedVideo
            }
        })
    
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0].id.videoId)

        console.log(response)
    } 

    const handleVideoSelect = (videoId) => {
        setSelectedVideo(videoId)
    }

    return (
        <>
            <Header />
            <Search searchVideo={searchVideo} />

            <div className='gridDiv'>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={6}>
                    <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <VideoDetails videoId={selectedVideo} />
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default Page1

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      marginBottom: '30px',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
