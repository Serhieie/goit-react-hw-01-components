import PropTypes from 'prop-types';
import { ListItem, Name, Status } from './FriendItem.styled';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status online={isOnline}></Status>
      <img className="avatar" src={avatar} alt={name} width="55" height="55" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
