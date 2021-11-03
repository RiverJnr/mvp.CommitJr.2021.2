import './style.css';
import AddIcon from '@mui/icons-material/Add';
import MovieList from '../../models/MovieList';
import React, { useState, useEffect } from 'react';
import { ThemeProvider, 
         Button, 
         InputLabel,
         OutlinedInput,
         FormControl,
         Select,
         MenuItem,
         createTheme
        } from '@mui/material';
import getGenres from '../../APIs/getGenres';
import getMovie from '../../APIs/getMovies'

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

function Destaques() {
  
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState(28);

  const[movies, setMovies] = useState([]);

  async function getGeneros() {
      const genresList = await getGenres();
      const genres = genresList.status ? genresList.data : ([]);
      setGeneros(genres);
  };

  async function getMovies(){
      const movieList = await getMovie(genero);

      const moviesResp = movieList.status ? movieList.movies : ([]);

      moviesResp.splice(5, moviesResp.length);
console.log(moviesResp);
      setMovies(moviesResp);
  };

  useEffect(() => {
      getGeneros();
  }, []);

  useEffect(() => {
    getMovies();
  }, [genero]);

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  async function loadMore(){
    const movieList = await getMovie(genero);
    const moviesResp = movieList.status ? movieList.movies : ([]);

    setMovies(moviesResp);
  }

  return (
      <ThemeProvider theme={theme}>

        <div className="highlights">

            <h1 className="title">Destaques</h1>

            <FormControl sx={{ marginLeft: 100, width: 200}}>
              
                <InputLabel id="demo-multiple-name-label">Categoria</InputLabel>

                  <Select
                  color="primary"
                  size="small"
                  value={genero}
                  onChange={handleChange}
                  autoWidth
                  input={<OutlinedInput label="Categoria"/>}
                  MenuProps={MenuProps}
                  >

                  {generos.map((genero) => (
                    
                    <MenuItem value={genero.id}>
                      {genero.name}
                    </MenuItem>

                  ))}

                  </Select>

            </FormControl>

            <div className="card">
                <MovieList movies={movies}/>
            </div>
            
            <div className="buttonLoad">
                <Button variant="contained" onClick="loadMore()" color="secondary" startIcon={<AddIcon />} sx={{marginInlineStart: 102, width: 200}}>
                    Carregar mais
                </Button>
            </div>

        </div> 
             
    </ ThemeProvider>
  );
}

export default Destaques;