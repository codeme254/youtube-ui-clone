import React from 'react';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    next__video__icon: {
        width: '2rem',
        height: '2rem',
        fill:'#fff',
    },
    next__video__icon__black: {
        width: '2rem',
        height: '2rem',
        fill:'#333',
        cursor: 'pointer'
    }
});
const NextVideo = ({videoPath, thumbnailLink, playTime, title, channelName, views, releaseDate}) =>{
    const classes = useStyles();
    return(
        <a href={videoPath} className="next-video">
            <div className="next-video__thumbnail">
                <img src={thumbnailLink} alt="next video thumbnail" className="next-video__thumbnail--img" />
                <span className="next-video__playtime">{playTime}</span>
                <div className="next-video__icons--left">
                    <span className="next-video__icons--holder">
                        <WatchLaterOutlinedIcon className={classes.next__video__icon} />
                    </span>
                    <span className="next-video__icons--holder">
                        <PlaylistAddIcon className={classes.next__video__icon} />
                    </span>
                </div>
            </div>
            <div className="next-video__left">
                <div className="next-video__details">
                    <h5 className="next-video__details--title">{title}</h5>
                    <p className="next-video__details--channel-name">{channelName}</p>
                    <p className="next-video__details--bottom">
                        <span className="next-video__details--views">{`${views} views`}</span>.<span className="next-video__release--date">{releaseDate}</span>
                    </p>
                </div>
            </div>
            <span className="next-video__icons--holder--left">
                <MoreVertIcon className={classes.next__video__icon__black} />
            </span>
        </a>
    )
}
export default NextVideo;