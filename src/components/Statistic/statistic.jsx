import PropTypes from 'prop-types';


export default function Statistics({ title, stats }) {
    return (
      <section>
        {title && <h2>{title}</h2>}
        <ul>
          {stats.map(({ id, label, percentage }) => (
            <li key={id}>
              <h4>{label}</h4>
              <p>{percentage}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  };