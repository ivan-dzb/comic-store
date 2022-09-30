import { Box } from '@mui/material'
import ComicCard from 'components/ComicCard/ComicCard'
import Navbar from 'components/Navbar/Navbar'
import RecentComics from 'components/RecentComics/RecentComics';
import React from 'react'
import { Comic } from 'types/comics';

const MainPage = () => {
  return (
    <Box component="main" sx={{paddingTop: 8, alignContent: "center"}}>
      <h2 style={{textAlign: "center", paddingBottom:"2rem"}}>Comics más recientes</h2>
        <RecentComics />
    </Box>
    )
}

export default MainPage