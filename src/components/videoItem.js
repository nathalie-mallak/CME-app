import React from 'react'
// import '../style/video.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt=''/>

            <div>
                {video.snippet.title}
                <br />
                {video.snippet.description}
            </div>
        </div>
    )
}

export default VideoItem