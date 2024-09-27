import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../../../actions/users';
import RoleCheckbox from './RoleCheckbox';
import useStyles from '../../../styles/Adminstyles.js';
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core';

const AdminPrivilege = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleCheckboxChange = (userId, isChecked) => {
    dispatch(updateUserRole(userId, {role: isChecked ? 'admin' : 'user'}));
    console.log(users);
    //click on checkbox
    //update db
    //refresh page
    //checkbox? ==> dispatch 
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" style={{color:'#000629', textDecoration: 'underline'}} gutterBottom>
              Assign Admin Privileges
            </Typography>
            {users &&
              users.map((user) => (
                <Grid container key={user._id} alignItems="center" spacing={2}>
                  <Grid item xs={8} style={{ padding: '0 16px' }}>
                    <Typography variant="body1" align='center' style={{ padding: 'auto', border:'1px solid black', color:'#020E1C', fontWeight:'bold' }} >{user.name}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={
                        <RoleCheckbox
                          checked={user.role === 'admin'}
                          onChange={(isChecked) =>
                            handleCheckboxChange(user._id, isChecked)
                          }
                        />
                      }
                      label="Assign privilege"
                    />
                  </Grid>
                </Grid>
              ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminPrivilege;