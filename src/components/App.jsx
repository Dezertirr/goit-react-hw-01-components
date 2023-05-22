import { Profile } from './profile/profile.jsx';
import user from './data/user.json';
import Statistics from './Statistic/statistic.jsx';
import statistics from './data/statistics.json';
import FriendsList from './FriendsList/friendsList.jsx'
import friends from './data/friends.json'


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistic"
        stats={statistics} />       
      <FriendsList
 friends={friends}
        />
    </div>
  );
};