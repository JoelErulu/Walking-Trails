import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../../styles/TrailFormstyles.js';
import { createTrail, updateTrail } from '../../actions/trails.js';

const initialState = { creator: '', title: '', location: '', distance: '', qr: '' };

const TrailForm = ({ currentId, setCurrentId }) => {
    const [trailData, setTrailData] = useState(initialState);
    const trail = useSelector((state) => currentId ? state.trails.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(trail) setTrailData(trail);
    }, [trail])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateTrail(currentId, trailData));
        } else {
            dispatch(createTrail(trailData));  
        }
        clear();
    }

    const clear = () => {
        setCurrentId(0);
        setTrailData({ creator: '', title: '', location: '', distance: '', selectedFile: '' });

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Trail</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={trailData.creator}onChange={(e) => setTrailData({ ...trailData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={trailData.title}onChange={(e) => setTrailData({ ...trailData, title: e.target.value })}/>
                <TextField name="location" variant="outlined" label="Location" fullWidth value={trailData.location}onChange={(e) => setTrailData({ ...trailData, location: e.target.value })}/>
                <TextField name="distance" variant="outlined" label="Distance (miles)" fullWidth value={trailData.distance}onChange={(e) => setTrailData({ ...trailData, distance: e.target.value })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setTrailData({ ...trailData, selectedFile: base64 })}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
        
    );
}

export default TrailForm;