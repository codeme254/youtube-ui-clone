import React from 'react';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

import LinkIcon from './LinkIcon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    side__icon__user: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#222',
        marginRight: '2rem'
    },
});
const NavSideUser = () => {
    const classes = useStyles();
    return(
        <nav className="nav-user">
            <LinkIcon linkName="library" route="/" icon={<VideoLibraryOutlinedIcon className={classes.side__icon__user} />} />
            <LinkIcon linkName="history" route="/" icon={<HistoryOutlinedIcon className={classes.side__icon__user} />} />
            <LinkIcon linkName="your videos" route="/" icon={<OndemandVideoOutlinedIcon className={classes.side__icon__user} />} />
            <LinkIcon linkName="watch later" route="/" icon={<WatchLaterOutlinedIcon className={classes.side__icon__user} />} />
            <LinkIcon linkName="liked videos" route="/" icon={<ThumbUpOutlinedIcon className={classes.side__icon__user} />} />
            <LinkIcon linkName="show more" route="/" icon={<KeyboardArrowDownOutlinedIcon className={classes.side__icon__user} />} />
        </nav>
    )
}
export default NavSideUser;