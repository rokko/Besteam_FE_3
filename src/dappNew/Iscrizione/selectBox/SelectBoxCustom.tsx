import { MenuItem } from '@mui/material'
import { InputLabel, ListSubheader } from '@mui/material'
import React, { useState } from 'react'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'


const SelectBoxCustom = ({list}) => {
    const [selectedValue, setSelectedValue] = useState('Italy');

    const handleChange =(e)=>{ 
        console.log(e)
    }

    return(
    <FormControl >
      <Select
      style={{ width: '25.85vw', height:'1.727vw',backgroundColor:'white',border :'1px solid green', borderRadius:'0px'}}
        labelId="search-select-label"
        id="select"
        value={selectedValue}
        onChange={(e)=>setSelectedValue(e?.target.value as any)}
      >
          <ListSubheader>

        {
            list.map((item,value)=>{
                return(
                <MenuItem key={value} value={item}>{item}</MenuItem>
                )
                
            })
        }
        </ListSubheader>
       
       
      </Select>
     
    </FormControl>

)
}

export default SelectBoxCustom