import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import Comics from "components/Comics/Comics";
import { Comic } from "types/comics";

type Props = {};

const Searched = (props: Props) => {
  const [searchParams] = useSearchParams();
  const [comics, setComics] = useState([]);

  // "

  const handleSearch = useCallback(async () => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchParams.get(
        "search"
      )}&format=hardcover&formatType=collection&noVariants=true&orderBy=onsaleDate&limit=50&offset=0&apikey=8987dae6fbbd93f31162e4b2be82fd4b`
    );
    const priceAndThumbnail = response.data.data.results.filter(
      (comic: Comic) => {
        return comic.prices[0].price && comic.images[0] && comic.description;
      }
    );
    setComics(priceAndThumbnail);
  }, [searchParams]);

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      handleSearch();
    }
  }, [handleSearch, searchParams]);

  return (
    <Box component="main" sx={{ paddingTop: 8, alignContent: "center" }}>
      <div style={{ paddingTop: "2rem" }}>
        {comics.length && <Comics comics={comics} />}
      </div>
    </Box>
  );
};

export default Searched;
