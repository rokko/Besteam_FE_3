import { MenuItem } from '@mui/material'
import { InputLabel, ListSubheader } from '@mui/material'
import React, { useState } from 'react'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'


const SelectBoxCustom = ({list,role,setNationality,nationality}) => {

    const handleChange =(e)=>{ 
        console.log(e)
    }

    return(
    <FormControl >
      <Select
        style={{ width:role? '11.967vw': '25.85vw', height:'1.727vw',backgroundColor:'white',border :'1px solid green', borderRadius:'0px'}}
        labelId="search-select-label"
        id="select"
        value={nationality}
        color='primary'
        onChange={(e)=>console.log(e)}
        >
          <ListSubheader>

        {
            list.map((item)=>{
                return(
                <MenuItem  onClick={handleChange} value={item}>{item}</MenuItem>
                )
                
            })
        }
        </ListSubheader>
       
       
      </Select>
     
    </FormControl>

)
}

export default SelectBoxCustom