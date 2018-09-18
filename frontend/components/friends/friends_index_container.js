import { connect } from 'react-redux';
import FriendIndex from './friends_index';
import { fetchFriends, updateFriend, deleteFriend } from '../../actions/friend_actions';

const mapStateToProps = state => ({
  friends: Object.values(state.entities.friends),
  currentUserId: state.session.currentUserId,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchFriends: (userId)=> dispatch(fetchFriends(userId)),
  deleteFriend: (userId, friendId)=>dispatch(deleteFriend(userId, friendId)),
  updateFriend: (userId, friend)=>dispatch(updateFriend(userId, friend)),
  createFriend: (userId, friend)=>dispatch(createFriend(userId, friend)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
