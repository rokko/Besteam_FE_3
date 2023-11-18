import React from 'react'
import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';



const CustomRadioGroup = ({prima,seconda,terza,primovalore,secondovalore,terzovalore, platform,setPlatform}) => {
    const options = [
        { value:primovalore ,image: prima },
        { value:secondovalore, image: seconda },
        { value:terzovalore ,image: terza },
      ];

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <div>
     
      <RadioGroup
        name="customRadioGroup"
        value={platform}
        style={{justifyContent:'center', gap:'1rem'}}
        onChange={handleChange}
        row
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            
            control={<Radio   sx={{ 
              fontSize:40,
              backgroundColor:'white',
              color:'white',
              border:'none'
              ,
              '&.Mui-checked': {
                border:'white',
                color: '#2DC653',
                backgroundColor:'white'
              },}} />}
            label={
              <div>
                <img
                  src={option.image}
                  alt={option.value}
                  style={{ marginRight: '8px', width: '100.15px', height: '45.15px' }}
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
