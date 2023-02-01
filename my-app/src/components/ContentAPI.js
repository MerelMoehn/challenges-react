import React from 'react';
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from './PostItem';
import Loader from './loader';
import axios from 'axios';
import API_KEY from '../secrets';

export class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages(){
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label HTMLfor="searchInput">Search:</label>
                        <input 
                        onChange={(event) => this.handleSearch(event)}
                        id="searchInput" 
                        type="search"
                        placeholder='By Author'
                        ></input>
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                {
                        this.state.isLoaded ?
                        <PostItem savedPosts= {this.state.posts}  />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content