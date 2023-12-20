import PropTypes from 'prop-types';
import { Wrapper } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <Wrapper className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </Wrapper>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
