import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
  <div>
    <img src={avatar} alt="" width={200} />
    <h3>{username}</h3>
    <p>{tag}</p>
    <p>{location}</p>

    <ul>
      <li>{followers}</li>
      <li>{views}</li>
      <li>{likes}</li>
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