import React from 'react';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header__logo__user: {
        width: '3rem',
        height: '3rem',
        fill:'#222',
        position: 'relative'
    },
});

const HeaderUser = ({ imageLink }) => {
    const classes = useStyles();
    const globalIconClassUser = classes.header__logo__user;
    return(
        <div className="header__user">
            <VideoCallOutlinedIcon className={globalIconClassUser} />
            <AppsOutlinedIcon className={globalIconClassUser} />
            <div className="header__u-relative">
                <NotificationsNoneSharpIcon className={globalIconClassUser} />
                <span className="header__user--notifications">9+</span>
            </div>

            <div className="header__user--avartar">
                <img src={imageLink} alt="user img" className="header__user--image" />
            </div>
        </div>
    )
}
export default HeaderUser;