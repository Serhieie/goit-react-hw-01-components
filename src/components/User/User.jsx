import PropTypes from 'prop-types';
import avatarPlaceholder from './placeholder.png';
import {
  UserCard,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Quantity,
} from './User.styled';

export default function User({
  username,
  tag,
  location,
  avatar = avatarPlaceholder,
  stats: { followers, views, likes },
}) {
  return (
    <UserCard key={tag}>
      <div>
        <Avatar src={avatar} alt={username} width={250} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </div>
      <Stats>
        <li>
          <span>Followers: </span>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <span>Views: </span>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <span>Likes: </span>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </UserCard>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
