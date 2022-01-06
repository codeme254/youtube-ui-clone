import React from 'react';
import LinkIcon from './LinkIcon';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    side__icon__more: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#222',
        marginRight: '2rem'
    },
});
const More = () => {
    const classes = useStyles();
    return(
        <div className="sidebar__more">
            <p className="title-small more__title">more from youtube</p>
            <div className="sidebar__more--links">
                <LinkIcon linkName="gaming" route="/" icon={<SportsEsportsIcon className={classes.side__icon__more} />} />
                <LinkIcon linkName="live" route="/" icon={<SettingsInputAntennaIcon className={classes.side__icon__more} />} />
                <LinkIcon linkName="sports" route="/" icon={<EmojiEventsOutlinedIcon className={classes.side__icon__more}  />} />
            </div>
        </div>
    )
}
export default More;