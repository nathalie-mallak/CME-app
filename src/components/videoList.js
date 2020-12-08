import React from 'react'
import VideoItem from './videoItem'
import { Paper, makeStyles } from '@material-ui/core'

const VideoList = ({videos , handleVideoSelect}) => {

    const classes = useStyles()

    const getVideos =  videos.map((video) => {

        return  <Paper className={classes.paper}>
                    <VideoItem 
                        key={video.id.videoId} 
                        video={video} 
                        handleVideoSelect={handleVideoSelect} 
                    />
                </Paper>

    })

    return  <> 
                {getVideos} 
            </>
}

export default VideoList

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