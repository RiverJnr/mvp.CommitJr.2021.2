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
          main:"#81c784"
      },
      secondary:{
        main:"#212121"
      },
      text: {
        primary:"#212121",
        secondary:"#212121",
      },
      background:{
        paper:"#81c784"
      },
  }
});

function Destaques() {
  
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState(28);

  const[movies, setMovies] = useState([]);

  const[selectMovies, setSelect] = useState([]);
  let[count, setCount] = useState(0);

  async function getGeneros() {
      const genresList = await getGenres();
      const genres = genresList.status ? genresList.data : ([]);
      setGeneros(genres);
  };

  async function getMovies(){
      const movieList = await getMovie(genero);

      const moviesResp = movieList.status ? movieList.movies : ([]);
      
      setSelect(moviesResp.slice(0,moviesResp.length));

      console.log(selectMovies);
      moviesResp.splice(5, moviesResp.length);

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
    const film = selectMovies.slice(count,count+5);
  
    setMovies(film);  
    if(count+5 >= selectMovies.length){
      setCount(0);
    }else{
      setCount(count+5);
    }  
}

  return (
      <ThemeProvider theme={theme}>

        <div className="highlights">

            <h1 className="title">Highlights</h1>

            <FormControl sx={{ marginLeft: 100, width: 200}}>
              
                <InputLabel id="demo-multiple-name-label" color="secondary">Category</InputLabel>

                  <Select
                  color="secondary"
                  size="small"
                  value={genero}
                  onChange={handleChange}
                  autoWidth
                  input={<OutlinedInput label="Category"/>}
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
                <Button variant="contained" 
                        onClick={loadMore} 
                        color="primary" 
                        startIcon={<AddIcon />} 
                        sx={{marginInlineStart: 102, width: 200}}>
                    Load More
                </Button>
            </div>

        </div> 
             
    </ ThemeProvider>
  );
}

export default Destaques;