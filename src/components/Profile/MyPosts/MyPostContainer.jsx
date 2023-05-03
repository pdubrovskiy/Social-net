import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postDraft: state.profilePage.postDraft
    }
};


const MyPostContainer = connect(mapStateToProps, {addPost})(MyPost);


export default MyPostContainer;