import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const VideoDetail = ({ videoId }) => 
{
    // loading while waiting data to be fetched 
    if(!videoId) 
    {
        return     <div>
         <Skeleton />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
        </div>
    }
    return (
        <>
            <iframe
                title={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
            />             
        </>
    )
}

export default VideoDetail