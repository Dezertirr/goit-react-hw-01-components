import PropTypes from 'prop-types';
import styles from './friendsList.module.css'

export default function FriendsList({ friends }) {
  return (
    <section>
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friendsItem}>
          <span  className={isOnline ? styles.online : styles.offline}></span>
          <img src={avatar} alt="" width={50} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
    </section>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};