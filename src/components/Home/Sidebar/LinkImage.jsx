import React from 'react';
// import SensorsIcon from '@material-ui/icons/Sensors';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    icon__antenna: {
        fill:'red'
    }
});
const LinkImage = ({imagePath, linkName, route}) => {
    const classes = useStyles();
    return(
        <a href={route} className="link-image">
            <div className="link-image__image">
                <img src={imagePath} alt={`${linkName} icon img`} className="link-image__image--img" />
            </div>
            <p className="link-image__name">{linkName}</p>
            <SettingsInputAntennaIcon  className={classes.icon__antenna}/>
        </a>
    )
}
export default LinkImage;