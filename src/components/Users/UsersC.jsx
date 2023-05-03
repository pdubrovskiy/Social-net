import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './users.module.css';


let Users = (props) => {


    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount > 10 ? 10 : pagesCount); i++) {
        pages.push(i);
    }

    return (
        <div className={classes.users_wrapper}>
            <div className={classes.pageNumbers}>
                {pages.map((i, id) => <span key={id} className={props.currentPage === i ? classes.selected_page : classes.unselected_page} onClick={() => props.onPageChanged(i)}>{i}</span>)}
            </div>
            {props.users.map(i => <div key={i.id} className={classes.user_container}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + i.id}>
                            <img src={i.photos.small ? i.photos.small : 'https://i.ibb.co/Gv2zmCk/user.png'} alt="" className={classes.user_photo} />
                        </NavLink>
                    </div>
                    <div>
                        <button disabled={props.followingInProgress.some(id => id === i.id)} onClick={() => {
                            i.followed ? props.unfollow(i.id) : props.follow(i.id);
                            }
                        }
                        >{i.followed ? 'UnFollow' : 'Follow'}</button>
                    </div>
                </span>
                <span className={classes.user_info}>
                    <span>
                        <div>{i.name}</div>
                        <div>{i.status}</div>
                    </span>
                    <span>
                        <div>{"i.location.country"}</div>
                        <div>{"i.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
}

export default Users;