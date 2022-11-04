import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Comics from 'components/Comics/Comics';

import { Box } from '@mui/material'
import { Comic } from 'types/comics';

const MainPage = () => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    getComicData();
  }, []);

  const getComicData = async () => {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/comics?format=hardcover&formatType=collection&noVariants=true&orderBy=onsaleDate&limit=50&offset=0&apikey=8987dae6fbbd93f31162e4b2be82fd4b"
    );
    const priceAndThumbnail = response.data.data.results.filter(
      (comic: Comic) => {
        return comic.prices[0].price && comic.images[0];
      }
    );
    setComics(priceAndThumbnail);
  };

  return (
    <Box component="main" sx={{paddingTop: 8, alignContent: "center"}}>
      <h2 style={{textAlign: "center", paddingBottom:"2rem", fontSize: "3rem"}}>Comics más recientes</h2>
        <Comics comics={comics}/>
    </Box>
    )
}

export default MainPage