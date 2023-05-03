import s from './Post.module.css'

const Post = (props) => {
    
    return (
        <div className={s.item}>
            <img src='https://i.ibb.co/Ntw7Lkv/iconuser.png' alt ="x"/>
            {props.message ? props.message : "default"}
            <div>
                <span className={s.likes}>{props.likesCount ? props.likesCount : 0} likes</span>
            </div>
        </div>
    );
}

export default Post;