import React, { useEffect, useState } from 'react';
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from './PostItem';
import Loader from './loader';

function ContentHooks() {
    const [isLoaded, setisLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setisLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, [])

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        setFetchedPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label HTMLfor="searchInput">Search:</label>
                    <input
                        onChange={(event) => handleChange(event)}
                        id="searchInput"
                        type="search"
                        placeholder='By Author'
                    ></input>
                    <h4>Posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                        <PostItem savedPosts={fetchedPosts} />
                        : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks