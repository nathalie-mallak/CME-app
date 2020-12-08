import React from 'react'

const VideoDetail = ({ videoId }) => {

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