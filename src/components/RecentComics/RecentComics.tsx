import axios from "axios";
import ComicCard from "components/ComicCard/ComicCard";
import React, { useState, useEffect } from "react";

import styles from "./RecentComics.module.css";

import { Comic } from "types/comics";

type Props = {};

const RecentComics = (props: Props) => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    getComicData();
  }, []);

  const getComicData = async () => {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/comics?format=hardcover&formatType=collection&noVariants=true&orderBy=onsaleDate&limit=50&offset=0&apikey=8987dae6fbbd93f31162e4b2be82fd4b"
    );
    const priceAndThumbnail = response.data.data.results.filter((comic: Comic) => {
        return comic.prices[0].price && comic.images[0];
    })
    console.log(priceAndThumbnail)
    setComics(priceAndThumbnail);
  };

  return (
    <div
      className={styles.container}
    >
      {comics.length && comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
};

export default RecentComics;
