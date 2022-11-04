import axios from "axios";
import ComicCard from "components/ComicCard/ComicCard";
import React, { useState, useEffect } from "react";

import styles from "./Comics.module.css";

import { Comic } from "types/comics";

type Props = {
  comics: Comic[]
};

const RecentComics = (props: Props) => {

  const {comics} = props

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
