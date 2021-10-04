import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Moment from 'react-moment';

import { IArticle } from 'interfaces';
import PropTypes from 'prop-types';
import { CardMedia } from '@material-ui/core';

declare type ArticlePropsType = {
    article: IArticle;
};

const useStyles = makeStyles({
    root: {
        marginTop: 30,
        // minHeight: 250,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ArticleCard: FunctionComponent = (props: any) => {
    const classes = useStyles();
    const { article }: ArticlePropsType = props;

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                height="205"
                image={article.urlToImage}
                alt={article.title}
            />
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {article.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Moment format="YYYY-MM-DD">{article.publishedAt}</Moment>
                </Typography>
                <Typography variant="body2" component="p">
                    {article.description}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={article.url} target="_blank">
                    <Button size="small">Read More</Button>
                </a>
            </CardActions>
        </Card>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default ArticleCard;
