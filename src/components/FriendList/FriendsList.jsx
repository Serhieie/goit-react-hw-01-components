import PropTypes from 'prop-types';
import FriendItem from '../FriendItem';
import { List } from './FriendList.styled';

export default function FriendsList(props) {
  return (
    <List>
      {props.friends.map(friend =>
        friend ? (
          <FriendItem
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            key={friend.id}
          />
        ) : null
      )}
    </List>
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
