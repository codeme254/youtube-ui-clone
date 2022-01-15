import React from 'react';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    icon__social: {
        width: '2rem',
        height: '2rem',
        marginRight: '1rem'
    },
});

const Comment = ({commentorImage, commentorName, commentDate, comment, likes, dislikes}) => {
    const classes = useStyles();
    return(
        <div className="comment">
            <div className="comment__image">
                <img src={commentorImage} alt={`${commentorName} display img`} className="comment__image--img" />
            </div>
            <div className="comment__details">
                <p className="comment__details--person">
                    <span className="comment__details--name">{commentorName}</span>
                    <span className="comment__details--date">{commentDate}</span>
                </p>
                <p className="comment__details--comment">{comment}</p>
                <div className="comment__social">
                    <span className="comment__social--icon-box"><ThumbUpOutlinedIcon className={classes.icon__social} />{likes}</span>
                    <span className="comment__social--icon-box"><ThumbDownOutlinedIcon className={classes.icon__social} />{dislikes}</span>
                    <button className="comment__social--reply">REPLY</button>
                </div>
            </div>
        </div>
    );
};
export default Comment;