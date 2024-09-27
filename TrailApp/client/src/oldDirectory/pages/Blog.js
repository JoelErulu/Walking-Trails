 import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPostPreview } from '../actions/posts.js';
import Posts from '../../oldDirectory/components/Posts/Posts.js';
import Form from '../components/Form/Form.js';
import useStyles from '../../styles/Blogstyles.js';

const Home = (theme) => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostPreview());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;

