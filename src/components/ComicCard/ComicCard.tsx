import React from "react";
import { Comic } from "types/comics";
import styles from "./ComicCard.module.css";

type Props = {
  comic: Comic;
};

const ComicCard = (props: Props) => {

  console.log(props.comic);
  return (
    <div className={styles.container}>
      {props.comic.description && (
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img
              src={`${props.comic.thumbnail.path}.${props.comic.thumbnail.extension}`}
              alt={props.comic.title}
              className={styles.card__image__img}
            />
          </div>
          <div className={styles.card__content}>
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
      <div className={styles.card__controls}>
        <div className={styles.card__controls__title}> {props.comic.title} </div>
        <div className={styles.card__controls__buttons}>
          <button className={styles.card__controls__button}>Add to cart</button>
          <button className={styles.card__controls__button}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
