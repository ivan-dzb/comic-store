import React from "react";
import { Character } from "types/character";

import styles from "./CharactersCarousel.module.css";

type Props = {
  characters: Character[];
  handleCharacterClick : (character: number) => void;
};

const CharactersCarousel = (props: Props) => {
  return (
    <div className={`${styles.container} ${styles.snaps_inline}`}>
      {props.characters.map((character) => (
        <div key={character.id} className={styles.card} onClick={() => props.handleCharacterClick(character.id)}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className={styles.character__image}
          />
          <p className={styles.character__name}>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersCarousel;
