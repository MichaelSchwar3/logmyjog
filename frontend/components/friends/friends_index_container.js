import { connect } from 'react-redux';
import FriendIndex from './friends_index';
import { fetchFriends } from '../../actions/friend_actions';

const mapStateToProps = state => ({
  friends: Object.values(state.entities.friends),
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  fetchFriends: (userId)=> dispatch(fetchFriends(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
