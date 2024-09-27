import React from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Trail from './Trail/Trail.js';
import useStyles from './styles.js';

const Trails = ({ setCurrentId }) => {
    const trails = useSelector((state) => state.trails);
    const classes = useStyles();

    console.log(trails);
    
    return (
        !trails.length ? <Grid container direction="column" justifyContent="center" alignItems="center"><CircularProgress /></Grid> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {trails.map((trail) => (
                    <Grid key={trail._id} item xs={12} sm={12} md={6} lg={3}>
                        <Trail trail={trail} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    );
}

export default Trails;