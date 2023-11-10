import User from './User';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import StatsList from './StatsList';
import FriendsList from './FriendList';
import TransactionHistory from './TransactionHistory';

export default function App() {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatsList title="Upload Stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
