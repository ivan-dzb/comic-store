import React from "react";
import { Comic } from "types/comics";
import styles from "./ComicCard.module.css";

type Props = {
    comic : Comic
};


const ComicCard = (props: Props) => {
  return (
    <>
    {props.comic.description && (
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
            src={`${props.comic.thumbnail.path}.${props.comic.thumbnail.extension}`}
            alt={props.comic.title}
            className={styles.card__image__img}
          />
        </div>
        <div>
          <h3 className={styles.card__title}>{props.comic.title}</h3>
          <p
            className={styles.card__description}
            dangerouslySetInnerHTML={{ __html: props.comic.description }}
          ></p>
          <h4 className={styles.card__price}>
            $ {props.comic.prices[0].price}
          </h4>
        </div>
      </div>
    )}
    </>
  );
};

export default ComicCard;
