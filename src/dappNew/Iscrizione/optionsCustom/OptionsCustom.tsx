import React from 'react'
import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';



const CustomRadioGroup = ({prima,seconda,terza,primovalore,secondovalore,terzovalore}) => {
    const options = [
        { value:primovalore ,image: prima },
        { value:secondovalore, image: seconda },
        { value:terzovalore ,image: terza },
      ];
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
     
      <RadioGroup
        name="customRadioGroup"
        value={selectedValue}
        style={{justifyContent:'center', gap:'5rem'}}
        onChange={handleChange}
        row
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            
            control={<Radio   style={{color:'green'}}/>}
            label={
              <div>
                <img
                  src={option.image}
                  alt={option.value}
                  style={{ marginRight: '8px', width: '45.15px', height: '45.15px' }}
                />
                
              </div>
            }
            labelPlacement="start"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CustomRadioGroup;
