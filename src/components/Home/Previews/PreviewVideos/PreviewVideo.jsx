import React from 'react';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    preview__video__icon: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#fff',
    },
    preview__video__icon__black: {
        width: '3rem',
        height: '3rem',
        fill:'#333',
    }
});
const PreviewVideo = ({videoPath, thumbnailPhotoPath, videoTitle, channelName, views, releaseDate, playTime, channelAvartarPath}) => {
    const classes = useStyles();
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
                <span className='preview-video__icons__parent--bottom dummy'>
                    <MoreVertIcon className={classes.preview__video__icon__black} />
                </span>
            </div>
            <div className='preview-video__icons'>
                <div className='preview-video__icons--top'>
                    <span className='preview-video__icons__parent'>
                        <WatchLaterOutlinedIcon className={classes.preview__video__icon} />
                    </span>
                    <span className='preview-video__icons__parent'>
                        <PlaylistAddIcon className={classes.preview__video__icon} />
                    </span>
                </div>
            </div>
        </a>
    )
}
export default PreviewVideo;