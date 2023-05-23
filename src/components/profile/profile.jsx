import PropTypes from 'prop-types';
import styles from './profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
  
  <div className={styles.userCard}>
    <img src={avatar} alt="" width={200}  />
    <h3 className={styles.username}>{username}</h3>
    <p className={styles.userTag}>@{tag}</p>
    <p className={styles.userLocation}>{location}</p>

    <ul className={styles.userStatsList}>
      <li className={styles.itemStats}>Folowers: {followers}</li>
      <li className={styles.itemStats}>Views: {views}</li>
      <li className={styles.itemStats}>Likes: {likes}</li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Profile;