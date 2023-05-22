import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <span className='status'></span>
          <img src={avatar} alt="" width={50} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};