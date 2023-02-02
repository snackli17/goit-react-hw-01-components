import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {Container, Description, Name, Stats,StatsList, Label, Quantity } from './Profile.styled';import user from '../Profile/user.json';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <img
          src="http://hypeava.ru/uploads/posts/2018-05/1527186603_7.png"
          alt="User avatar"
        />
        <Name>{user.username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </Container>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
