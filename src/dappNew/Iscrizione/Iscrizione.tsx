import React from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  FormIscrizione,
  InputIscrizione,
  TestoIscrizione,
  TestoPiccolo,
} from "./IscrizioneStyled";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
interface CheckboxProps {
  classes: {
    root: string;
    label: string;
  };
}
import { Checkbox, FormControlLabel } from "@mui/material";
import {makeStyles} from '@material-ui/core/styles'
const useStyles  =makeStyles({
  checkbox: {
    color: 'green', // Change the color of the checkbox
    borderRadius:'100px',
    '&.Mui-checked': {
      color: '#0f0', // Change the color of the checked checkbox
    },
    "& .MuiSvgIcon-root": {
      fontSize: 30,
      borderRadius: '50%',
    }
  },

  label: {
    fontSize: 16, // Change the font size of the label
    fontWeight: 'bold', // Change the font weight of the label
  },
});
const Iscrizione = () => {
  
  const classes = useStyles();
  return (
    <Container>
      <FormIscrizione>
        <div>
          <TestoIscrizione>NICKNAME*</TestoIscrizione>
          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>EMAIL*</TestoIscrizione>
          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>WALLET*</TestoIscrizione>

          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>DISCORD*</TestoIscrizione>

          <InputIscrizione />
        </div>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'flex-start'}}>
        <FormControlLabel
          control={<Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} classes={{ root: classes.checkbox }} />}
          label="I accept the Terms and conditions and Privacy Policy." // Add your label here
        />
        <FormControlLabel
          control={<Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} classes={{ root: classes.checkbox }} />}
          label="I agree to subscribe to Besteam newsletter." // Add your label here
        />
        </div>
        <ButtonIscrizione>NEXT</ButtonIscrizione>
        <TestoPiccolo>* SONO CAMPI OBBLIGATORI </TestoPiccolo>

      </FormIscrizione>
    </Container>
  );
};

export default Iscrizione;
