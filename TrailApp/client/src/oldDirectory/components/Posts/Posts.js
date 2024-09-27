import React from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';
import useStyles from '../../styles/Poststyles.js';

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();

    if(!posts.length && !isLoading) return 'No posts';

    console.log(posts);
    
    return (
        isLoading ? <Grid container direction="column" justifyContent="center" alignItems="center"><CircularProgress /></Grid> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    );
}

export default Posts;