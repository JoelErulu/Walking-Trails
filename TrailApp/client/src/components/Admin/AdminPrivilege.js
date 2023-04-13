import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';

const AdminPrivilege = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
 
  const [privileges, setPrivileges] = useState(Array(users.length).fill(false));

  useEffect(() => {
    //This calls for the users within the db the first time and changes based on user change (if new or updated user)
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setPrivileges(users.map(user => user.role));
    }
  }, [users]);

  //first, retrieve the user role and make the checkbox on if found
  //updates db
  //retrieves user 

  const handleCheckboxChange = (event, index) => {
    const newPrivileges = [...privileges];
    console.log("Privilege? ");
    // console.log(newPrivileges);
    newPrivileges[index] = event.target.checked;
    setPrivileges(newPrivileges);
    // Update user in the database here
  };
  return (
    <List>
      {users && users.map((user, index) => (
        <ListItem key={user._id}>
          <ListItemText primary={user.name} />
          <FormControlLabel
            control={
              <Checkbox
                checked={privileges[index]}
                onChange={event => handleCheckboxChange(event, index)}
                name={`user-${user.id}-privilege`}
              />
            }
            label="Assign privilege"
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AdminPrivilege;