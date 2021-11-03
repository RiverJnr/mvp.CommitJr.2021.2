import './style.css';
import React from 'react';
import Logo from '../../assets/logoMovies.png'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, 
         TextField, 
         ThemeProvider, 
         createTheme
        } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
        }
    }
  });

function Header(){
 
    return(
        <ThemeProvider theme={theme}>

            <header className="header-edit">
                
                <img src={Logo} alt="Logo"/>

                <div className="menu"> 
                    <span>Releases | Highlights</span>
                </div>

                <TextField 
                    label="Search Movie"
                    focused
                    InputProps={{
                        startAdornment: (
                            <>
                                <InputAdornment position="start">
                                    <SearchIcon color="primary"/>
                                </InputAdornment>
                            </>
                        ),
                        endAdornment: (
                            <>
                                <InputAdornment position="end">
                                    <HighlightOffIcon color="primary"/>
                                </InputAdornment>
                            </>
                        ),
                    }}
                    variant="outlined"
                />

            </header>

        </ThemeProvider>
    );
}

export default Header;