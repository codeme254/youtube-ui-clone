import React from 'react';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import OutlinedFlagSharpIcon from '@material-ui/icons/OutlinedFlagSharp';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';

import LinkIcon from './LinkIcon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    side__icon__extras: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#222',
        marginRight: '2rem'
    },
});

const Extras = () => {
    const classes = useStyles()
    return(
        <div className="sidebar__extras">
            <LinkIcon linkName="settings" route="/" icon={<SettingsOutlinedIcon className={classes.side__icon__extras} />} />
            <LinkIcon linkName="report history" route="/" icon={<OutlinedFlagSharpIcon className={classes.side__icon__extras} />} />
            <LinkIcon linkName="help" route="/" icon={<HelpOutlineOutlinedIcon className={classes.side__icon__extras} />} />
            <LinkIcon linkName="send feedback" route="/" icon={<FeedbackOutlinedIcon className={classes.side__icon__extras} />} />
        </div>
    )
}
export default Extras;