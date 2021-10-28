import './style.css';
import AddIcon from '@mui/icons-material/Add';
import Card from '../card';
import * as React from 'react';
import { ThemeProvider, 
         Button, 
         InputLabel,
         OutlinedInput,
         FormControl,
         Select,
         MenuItem,
         createTheme
        } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const theme = createTheme({
  palette: {
      primary:{
          main:"#212121"
      },
      secondary:{
        main:"#fff"
      },
      text: {
        primary:"#212121",
        secondary:"#212121",
      },
      action:{
        active:"#212121"
      },
  }
});

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley WilkersonBradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Destaques() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
      event.target.value,
    );
  };

  return (
      <ThemeProvider theme={theme}>

        <div className="highlights">

            <h1 className="title">Destaques</h1>

            <FormControl sx={{ marginLeft: 100, width: 200}}>
              
                <InputLabel id="demo-multiple-name-label">Categoria</InputLabel>

                  <Select
                  color="primary"
                  size="small"
                  value={personName}
                  onChange={handleChange}
                  autoWidth
                  input={<OutlinedInput label="Categoria"/>}
                  MenuProps={MenuProps}
                  >

                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}

                  </Select>

            </FormControl>

            <div className="card">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            
            <div className="buttonLoad">
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{marginInlineStart: 102, width: 200}}>
                    Carregar mais
                </Button>
            </div>

        </div> 
             
    </ ThemeProvider>
  );
}

export default Destaques;