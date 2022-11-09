import { Box } from "@mui/material";
import axios from "axios";
import CharactersCarousel from "components/CharactersCarousel/CharactersCarousel";
import Comics from "components/Comics/Comics";
import React, { useCallback } from "react";
import { Comic } from "types/comics";

type Props = {};

const ByCharacter = (props: Props) => {
  const [characters, setCharacters] = React.useState([]);
  const [selectedCharacter, setSelectedCharacter] = React.useState<
    string | null
  >(null);
  const [comics, setComics] = React.useState([]);

  const handleCharacterClick = (character: number) => {
    setSelectedCharacter("" + character);
  };

  const getCharacters = useCallback(async () => {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/events/238/characters?limit=30&apikey=8987dae6fbbd93f31162e4b2be82fd4b"
    );
    setCharacters(response.data.data.results);
  }, []);

  const getComicsByCharacter = useCallback(async () => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?format=hardcover&formatType=collection&noVariants=true&characters=${selectedCharacter}&orderBy=focDate&limit=50&offset=0&apikey=8987dae6fbbd93f31162e4b2be82fd4b`
    );
    const priceAndThumbnail = response.data.data.results.filter(
      (comic: Comic) => {
        return comic.prices[0].price && comic.images[0] && comic.description;
      }
    );
    setComics(priceAndThumbnail);
  }, [selectedCharacter]);

  React.useEffect(() => {
    getCharacters();
    if (selectedCharacter) {
      getComicsByCharacter();
    }
  }, [getCharacters, selectedCharacter, getComicsByCharacter]);

  return (
    <Box component="main" sx={{ paddingTop: 8, alignContent: "center" }}>
      <CharactersCarousel
        characters={characters}
        handleCharacterClick={handleCharacterClick}
      />
      <div style={{ paddingTop: "2rem" }}>
        {comics.length && <Comics comics={comics} />}
      </div>
    </Box>
  );
};

export default ByCharacter;
