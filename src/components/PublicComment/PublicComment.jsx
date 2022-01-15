import React from "react";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    side__icon__user: {
        width: '2.5rem',
        height: '2.5rem',
        fill:'#222',
        marginRight: '.5rem'
    },
});
const PublicComment = ({numberOfComments, userAvartar}) => {
  const classes = useStyles();
  return (
    <div className="play-page__personal-comment">
      <div className="public-comment__header">
        <span className="public-comment__header--number">{`${numberOfComments} comments`}</span>
        <button className="public-comment__header--button">
          <PlaylistAddIcon className={classes.side__icon__user} />
          sort by
        </button>
      </div>
      <div className="public-comment__body">
        <div className="public-comment__body--avartar">
          <img src={userAvartar} alt="user profile display img" className="public-comment__body--image" />
        </div>
        <input type="text" placeholder="Add a public comment..." className="public-comment__body--input" />
      </div>
    </div>
  );
};
export default PublicComment;
