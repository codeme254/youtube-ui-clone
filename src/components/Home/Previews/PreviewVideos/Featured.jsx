import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    featured__icon: {
        width: '2.5rem',
        height: '2.5rem',
    },
});
const Featured = ({imageLink, featuredTitle, featuredDescription, featuredLink}) => {
    const classes = useStyles();
    return(
        <div className="featured">

            <div className="featured__box">
                <div className="featured__image">
                    <img src={imageLink} alt={`${featuredTitle} representation img`} className="featured__image--img" />
                </div>
                <div className="featured__description">
                    <p className="featured__description--title">{featuredTitle}</p>
                    <p className="featured__description--text">{featuredDescription}</p>
                    <a href={featuredLink} className="featured__description--link">Learn More <StarRateIcon className={classes.featured__icon} /></a>
                </div>
            </div>

            <CloseIcon className={classes.featured__icon} />
        </div>
    )
};
export default Featured;