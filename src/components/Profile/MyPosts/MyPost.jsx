import Post from './Post/Post';
import classes from './MyPost.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormControls/FormControls';


const MyPost = React.memo((props) => {

    const postElements = props.posts.map((elem, id) => <Post key={id} message={elem.message} likesCount={elem.likesCount} />);

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }




    return (
        <div className={classes.postBlock}>
                <h3>My posts</h3>
                <ReduxNewPostForm onSubmit={addPost} addPost={props.addPost}/>
            <div className={classes.container_posts}>
                <div className={classes.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
});



const maxLength10 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);

const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={classes.form_wrapper}>
            <div>
                <Field name="newPostText" component={Input} type="text" placeholder='New post' className={classes.text} validate={[required, minLength3, maxLength10]} />
            </div>
            <div>
                <button className={classes.button_addPost}>Add post</button>
            </div>
        </form>
    );
};

const ReduxNewPostForm = reduxForm({ form: 'newPost' })(NewPostForm)

export default MyPost;