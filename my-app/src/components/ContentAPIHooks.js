import React, {useState, useEffect} from 'react';
import css from "./css/Content.module.css";
import PostItemAPI from './PostItemAPI';
import Loader from './loader';
import axios from 'axios';
import API_KEY from '../secrets';

export default function ContentAPIHooks() {
    const [isLoaded, setisLoaded] = useState(false);
    const [posts, setposts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(()=>{
        fetchImages()
    }, []);

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        setisLoaded(true);
        setposts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        setposts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchinput">Search</label>
                    <input 
                    type="search" 
                    id="searchinput" 
                    placeholder="By Author"
                    onChange={(e) => handleChange(e)}
                    />
                    <h4>posts found {posts.length}</h4>
                </form>
            </div>

            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItemAPI savedPosts={posts} />
                    : <Loader />
                }

            </div>
        </div>
    )
}