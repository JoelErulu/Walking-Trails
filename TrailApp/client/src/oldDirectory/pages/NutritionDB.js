import React, { useEffect, useState } from 'react';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, TextField, ListItem, ListItemText, List, Link, Box} from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import useStyles from '../styles/Nutritionstyles.js';
import { createNutrition, getNutrition, updateNutrition, deleteNutrition} from '../../actions/nutritions.js';
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
                             
        </Container></>
    );
};

export default Nutrition;