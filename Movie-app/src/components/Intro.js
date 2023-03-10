import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

function Intro({ title, summary, url, genre, rating, bgImg }) {
  return (
    <div className={styles.color}>
      <img src={bgImg} alt={title} className={styles.full} />
      <h2 className={styles.white}>{title}</h2>

      <h3 className={styles.genre}>
        {genre.map((g) => (g !== genre[genre.length - 1] ? `${g}/` : `${g}`))}
      </h3>
      <h3 className={styles.rat}>평점: {rating}</h3>

      <button style={{ height: 50 }}>
        <a href={url} target='_blank' className={styles.btn}>
          Click and watch '{title}' now!
        </a>
      </button>
      <p> {summary}</p>
    </div>
  );
}
export default Intro;
