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
            main:"#fff"
        },
        secondary:{
          main:"#212121"
        },
        text: {
          primary:"#fff",
        }
    }
  });

function Header(){
 
    return(
        <ThemeProvider theme={theme}>

            <header className="header-edit">
                
                <img src={Logo} />

                <div className="menu"> 
                    <span>Lançamentos | Destaques</span>
                </div>

                <TextField 
                    label="Pesquisar filme"
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