import React from 'react';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    subscribe__icon:{
        width: '3rem',
        height: '3rem',
        cursor: 'pointer'
    }
})
const ChannelDetailsPlaying = ({channelLogo, channelName, subscribers, fullDescription}) => {
    const classes = useStyles();
    return(
                <div className="video__youtuber">
                    <div className="video__youtuber--thumbnail">
                        <img src={channelLogo} alt="" className="video__youtuber--avaratar" />
                    </div>
                    <div className="video__youtuber--channel">
                        <div>
                            <p className="video__youtuber--channel-name">{channelName}</p>
                            <p className="video__youtuber--channel-subscribers">{`${subscribers} subscribers`}</p>
                        </div>
                        <p className="video__full-description">{fullDescription}</p>
                    </div>
                    <div className="video__subscription">
                        <button className="video__subscription--button">subscribe</button>
                        <NotificationsNoneSharpIcon className={classes.subscribe__icon} />
                    </div>
                </div>
        
    )
}
export default ChannelDetailsPlaying;