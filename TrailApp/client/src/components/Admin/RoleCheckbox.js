import { Checkbox } from '@material-ui/core';
import React from 'react';

const RoleCheckbox = ({ checked, onChange }) => {
  return (
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

  );

};

export default RoleCheckbox;

