import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { httpGet } from '@shared/services';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArticleCard from 'components/articles/article-card';

import { useAppDispatch, setArticles } from '@shared/store';

const useStyles = makeStyles({
    root: {
        marginTop: 30,
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

export async function getServerSideProps(context) {
    const props = {
        articles: [],
    };

    try {
        const { data }: any = await httpGet(
            `/everything?q=tesla&from=2021-09-04`
        );
        props.articles = data.articles;
    } catch (error) {
        console.log(error.message);
    }

    return {
        props,
    };
}

const Articles: FunctionComponent = (props: any) => {
    const dispatch = useAppDispatch();
    dispatch(setArticles(props.articles));

    const classes = useStyles();
    const { articles } = props;

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {articles.map((el, i) => {
                        return (
                            <Grid item xs={6} key={i + '-article'}>
                                <ArticleCard article={el} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
};

export default Articles;
