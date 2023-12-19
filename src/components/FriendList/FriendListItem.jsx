import { Item } from "./FriendListItem.styled copy";

export const FriendListItem = ({ friends }) => {
	return friends.map(({id, name, isOnline, avatar}) => {
		return (
			<Item key={id} className="item" $isOnline={isOnline}>
  	<span className="status"></span>
  		<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name }</p>
		</Item>);
	})
};

