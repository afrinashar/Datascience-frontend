// src/components/DataForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const DataForm = ({ onAddData }) => {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/data', {
        label,
        value: parseFloat(value),
      });
      onAddData(response.data);
      setLabel('');
      setValue('');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Value"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Data
      </Button>
    </Box>
  );
};

export default DataForm;
