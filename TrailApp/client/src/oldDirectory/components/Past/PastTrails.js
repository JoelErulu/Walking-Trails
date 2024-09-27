import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getTrails } from '../../actions/trails.js';
import Trails from '../../../components/Trails/Trails.js' //'../Trails/Trails.js';
import TrailForm from '../TrailForm/TrailForm.js'; //'../TrailForm/TrailForm.js';

const ManageTrail = (theme) => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrails());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TrailForm currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                        <Trails setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default ManageTrail;