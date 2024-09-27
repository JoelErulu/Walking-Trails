import React, { useEffect, useState } from 'react';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, TextField, ListItem, ListItemText, List, Link, Box} from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import useStyles from '../../../styles/NutritionAdminstyles.js';
import { createNutrition, getNutrition, updateNutrition, deleteNutrition} from '../../../actions/nutritions.js';
import FileBase from 'react-file-base64';


const Nutrition = () => {

    const classes = useStyles();
    const initialState = {name: '', description: '', link: ''};
    const nutritions = useSelector((state) => state.nutrition.nutritions);


    //gets nutrition from store
    // const {nutrition, setNutrition} = useSelector((state) => state.nutrition);

    const [nutritionFormData, setNutritionFormData] = useState(initialState);
    const [selectedNutrition, setSelectedNutrition] = useState([]);
    const dispatch = useDispatch();

    //get nutrition from db
    useEffect(() => {
        dispatch(getNutrition());
    }, [dispatch])


    //submit form to create nutrition
    const handleSubmit = (e) => {
        // e.preventDefault();

        dispatch(createNutrition(nutritionFormData));

        // if (selectedMarker.key) {
        //     dispatch(updateNutrition(selectedMarker._id, markerFormData));
        // }
        // clear();
        
    
    };

    // const handleDelete = (e) => {
    //     if (selectedMarker.key) {
    //         dispatch(deleteMarker(selectedMarker.key))
    //         clear();
    //     }
    // };

    const clear = () => {
        setSelectedNutrition(null)
        setNutritionFormData(initialState);

    };

    
    return (
        <>
        
        <Container component="main" maxWidth="xl">
        
        <Paper elevation={2}>
        <Typography> 
        <List>
        {nutritions.map((item) => (
        <ListItem key={item._id}>
          <ListItemText align="justify">{item.name}</ListItemText>
          <ListItemText align="justify" ><Box sx={{ p: 2, border: '1px solid grey', width: 700, }}>{item.description}</Box></ListItemText>
          <Link href={item.link}target="_blank" rel="noreferrer" align="justify"><Button color="secondary" variant="contained">Youtube video</Button></Link>
        </ListItem>
        ))}
        </List>
        </Typography>
        </Paper> 
                <Paper className={classes.paper} elevation={3}>
                <form onSubmit={handleSubmit}>
                <TextField name='name' variant="outlined" label="Name" margin="normal" value={nutritionFormData.name}
                onChange={(e) => setNutritionFormData({...nutritionFormData, name: e.target.value})}></TextField>
                <br/>
                <TextField name='name' variant="outlined" label="Description" margin="normal" value={nutritionFormData.description}
                onChange={(e) => setNutritionFormData({...nutritionFormData, description: e.target.value})}></TextField>
                <br/>
                <TextField name='name' variant="outlined" label="Link" margin="normal" value={nutritionFormData.link}
                onChange={(e) => setNutritionFormData({...nutritionFormData, link: e.target.value})}></TextField>
                <br/>
                <Button type='submit' color="primary" variant="contained">Create</Button>
                </form>
                </Paper>  
                
                             
        </Container></>
    );
};

export default Nutrition;