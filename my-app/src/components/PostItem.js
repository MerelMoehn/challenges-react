import React from 'react';
import css from "./css/PostItem.module.css";

function PostItem(props) {
    return (
        <div>
                        {
                            props.savedPosts.map((post) => {
                                return <div className={css.SearchItem} key={post.title}>
                                    <p>{post.title}</p>
                                    <p>{post.name}</p>
                                    <img src={post.image} alt="random" />
                                    <p>{post.description}</p>
                                </div>
                            })
                        }
        </div>
    )
}

export default PostItem