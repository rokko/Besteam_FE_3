import { Menu, MenuItem } from '@mui/material'
import { InputLabel, ListSubheader } from '@mui/material'
import React, { useRef, useState } from 'react'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'


const SelectBoxCustom = ({list,role,setNationality,nationality}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuRef = useRef(null);

    const cambiaValore = (item)=>{
      setNationality(item)
      chiudiMenu()
    }

    const chiudiMenu = () =>{
      const test = menuRef.current as any
      test.style.display='none';
      console.log(menuRef.current)
    }
    const handleChange =(e)=>{ 
        setNationality(e.target.value)
    }

    return(
    <FormControl >
      <Select
        style={{ width:role? '11.967vw': '25.85vw', height:'1.727vw',backgroundColor:'white',border :'1px solid green', borderRadius:'0px'}}
        labelId="search-select-label"
        id="select"
        value={nationality}
        color='primary'
        onChange={handleChange}
        renderValue={(nationality) => `${nationality}`}
        >
          <ListSubheader ref={menuRef}>

        {
            list.map((item)=>{
                return(
                <MenuItem  onClick={()=>cambiaValore(item)} value={item}>{item}</MenuItem>
                )
                
            })
        }
        </ListSubheader>
       
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={chiudiMenu}
        MenuListProps={{
          'aria-labelledby': 'elementi-label',
        }}
      />
       
      </Select>
     
    </FormControl>

)
}

export default SelectBoxCustom