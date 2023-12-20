import { Item } from './FriendListItem.styled copy';

export const FriendListItem = ({ friend: { name, isOnline, avatar } }) => (
  <Item className="item" $isOnline={isOnline}>
    <span className="status"></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </Item>
);
