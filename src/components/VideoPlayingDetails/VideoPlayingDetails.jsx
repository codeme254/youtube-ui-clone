import React from "react";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { IosShareRounded } from "@material-ui/icons";
import { Share } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    icon__social__vidplaying: {
        width: '2rem',
        height: '2rem',
        marginRight: '.8rem'
    },
});
const VideoPlayingDetais = ({title, views, releaseDate, likes}) => {
    const classes = useStyles()
  return (
    <div className="vidplaying-details">
      <p className="vidplaying-details__title">{title}</p>
      <div className="vidplaying-details__body">
          <div className="vidplaying-details__body--left">
              <p className="vidplaying-details__body--views">{`${views} views`} . {releaseDate}</p>
          </div>
          <div className="vidplaying-details__body--right">
            <button className="vidplaying-details__button"><ThumbUpOutlinedIcon className={classes.icon__social__vidplaying} />{likes}</button>
            <button className="vidplaying-details__button another-dummy"><ThumbDownOutlinedIcon className={classes.icon__social__vidplaying} />dislike</button>
            <button className="vidplaying-details__button"><Share className={classes.icon__social__vidplaying}/>share</button>
            <button className="vidplaying-details__button"><PlaylistAddIcon className={classes.icon__social__vidplaying} /> save</button>
            {/* <button className="vidplaying-details__button">save</button> */}
            <button className="vidplaying-details__button vidplaying-details__button--rotated"><MoreVertIcon className={classes.icon__social__vidplaying} /></button>
            {/* <IosShareRounded /> */}
          </div>
      </div>
    </div>
  );
};
export default VideoPlayingDetais;
