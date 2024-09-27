import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import useStyles from '../../styles/Adminstyles.js';
import gold from '../../assets/images/gold.png';
import green from '../../assets/images/green.png';
import gray from '../../assets/images/gray.png';


const Admin = () => {

    const classes = useStyles();
    const [trail, setTrail] = useState('');
    const trails = useSelector((state) => state.trails);
    const [userRole, setUserRole] = useState('');
    const [checkpoint, setCheckpoint] = useState('/home');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrails());
        const currentUser = JSON.parse(localStorage.getItem("profile"));
        const currentUserRole = currentUser.result.role;
        setUserRole(currentUserRole);
    }, [dispatch]);

    const handleChange = (event) => {
        console.log(event);
        setTrail(event.target.value);
        setCheckpoint("/"+event.target.value+"Admin");
    };

    return (

        <Container component="main" maxWidth="xl">
        <Typography className={classes.paper} variant="h5">Admin</Typography>
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={0}>
                <FormControl variant="filled" fullWidth>

                        <InputLabel id="demo-simple-select-label">Trails</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={trail}
                            label="Trails"
                            onChange={handleChange}
                        >
                            {trails.map((trail) => (
                                <MenuItem key ={trail._id} value={trail.title}>{trail.title}</MenuItem>

                            ))}
                        </Select>
                    </FormControl><br></br>
                </Grid>

                <Paper className={classes.paper} elevation={3}>
                    <Grid className={classes.submit} container direction="column">
                        <Button component={Link} to={checkpoint} variant="contained" color="primary">Edit CheckPoints </Button><br></br>
                        {/* <Button component={Link} to="/blog" variant="contained" color="primary">My Trails</Button><br></br> */}
                        <Button component={Link} to="/trails" variant="contained" color="primary">Create / Manage Trails</Button><br></br>
                        <Button component={Link} to="/nutritionAdmin" variant="contained" color="primary">Create / Manage Nutrition</Button><br></br>
                        {userRole==="SuperAdmin"?<Button component={Link} to="/adminPrivilege" variant="contained" color="primary">Assign Admin Privilege</Button>:''}
                    </Grid>
                </Paper>
            </Container>
    );
};

export default Admin; 