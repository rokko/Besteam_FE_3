import React from 'react';
import { Select, MenuItem, FormControl, Box } from '@mui/material';

export default function ColorSelect() {
  const [color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const colors = [
    { value: 'red', color: '#FF0000' },
    { value: 'blue', color: '#0000FF' },
    { value: 'green', color: '#008000' },
    // Aggiungi altri colori qui...
  ];

  return (
    <FormControl fullWidth>
      <Select
        value={color}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Seleziona un colore</em>;
          }
          return <Box style={{ width: '100%', height: '100%', backgroundColor: selected }} />;
        }}
      >
        {colors.map((option) => (
          <MenuItem key={option.value} value={option.color} style={{ backgroundColor: option.color, color: option.color }}>
            {/* Vuoto per non mostrare il nome del colore */}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}