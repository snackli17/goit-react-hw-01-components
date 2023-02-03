import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './Friend.module.css';


export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        key={friend.id}
        isOnline={friend.isOnline}
      ></FriendListItem>
    ))}
  </ul>
);


FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      key:PropTypes.number.isRequired,
    }),
  ),
};
