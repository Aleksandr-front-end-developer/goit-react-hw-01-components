import PropTypes from 'prop-types'; 
import { Wrapper } from './FriendList.styled';
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
			return (
				<Wrapper className="friend-list" >
					<FriendListItem friends={friends} />		
				</Wrapper>
			);
	
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.object)
}

