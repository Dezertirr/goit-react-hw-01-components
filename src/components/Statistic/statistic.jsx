import PropTypes from 'prop-types';
import styles from './statictic.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


export default function Statistics({ title, stats }) {
    return (
      <section>
        <div className={styles.statContainer}>
        {title && <h2 className={styles.statTitle}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className={styles.listItemStat} style={{backgroundColor:getRandomHexColor()}}>
              <h4 className={styles.statDoc}>{label}</h4>
              <p className={styles.statPerc}>{percentage}</p>
            </li>
          ))}
        </ul>
        </div>
      </section>
    );
  }
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  };