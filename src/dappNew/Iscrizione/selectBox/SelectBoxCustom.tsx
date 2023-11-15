import { MenuItem } from '@mui/material'
import { InputLabel, ListSubheader } from '@mui/material'
import React, { useState } from 'react'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'


const SelectBoxCustom = ({list,role}) => {
    const [selectedValue, setSelectedValue] = useState('Italy');

    const handleChange =(e)=>{ 
        console.log(e)
    }

    return(
    <FormControl >
      <Select
      style={{ width:role? '11.967vw': '25.85vw', height:'1.727vw',backgroundColor:'white',border :'1px solid green', borderRadius:'0px'}}
        labelId="search-select-label"
        id="select"
        value={selectedValue}
        color='primary'
        onChange={(e)=>setSelectedValue((e?.target as HTMLInputElement)?.value)}
        >
          <ListSubheader>

        {
            list.map((item)=>{
                return(
                <MenuItem onClick={(e)=>setSelectedValue((e?.target as HTMLInputElement).value)} value={item}>{item}</MenuItem>
                )
                
            })
        }
        </ListSubheader>
       
       
      </Select>
     
    </FormControl>

)
}

export default SelectBoxCustom