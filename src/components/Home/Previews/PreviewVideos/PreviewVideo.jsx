import React from 'react';

const PreviewVideo = ({videoPath, thumbnailPhotoPath, videoTitle, channelName, views, releaseDate, playTime, channelAvartarPath}) => {
    return(
        <a href="yes" className="preview-video">
            <div className="preview-video__thumbnail-container">
                <img src={thumbnailPhotoPath} alt={`${videoTitle} thumbnail representation`} className="preview-video__thumbnail-container--img" />
                <span className="preview-video__play-time">{playTime}</span>
            </div>
            <div className="preview-video__body">
                <div className="preview-video__avartar">
                    <img src={channelAvartarPath} alt={`${channelName} avartar`} className="preview-video__avartar--img" />
                </div>
                <div className="preview-video__details">
                    <h5 className="preview-video__details--title">{videoTitle}</h5>
                    <p className="preview-video__details--channel">{channelName}</p>
                    <p className="preview-video__misc">
                        <span className="preview-video__misc--views">{views} views</span>
                        <span>.</span>
                        <span className="preview-video__misc--release">{releaseDate}</span>
                    </p>
                </div>
            </div>
        </a>
    )
}
export default PreviewVideo;