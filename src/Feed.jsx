import React from 'react';
import Comments from './Comments';
import PostsNavBar from './PostsNavBar';
import { API_URL } from './Constants';
import './Feed.css';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';


class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
        this.postView = this.postView.bind(this);
        this.postData = this.postData.bind(this);
    }
    postView(post, index) {
        return (
            <div className="container">
                <div className="box" key={index}>
                    <div className="user_avatar">
                        <Avatar variant="square" alt="avatar" src="" />
                        <h6>{post.user}</h6>
                    </div>
                    <Divider/>
                    <p> {post.content} </p>
                    {post.imageUrl === "" ? "" : <img className="post_image" src={post.imageUrl} alt="images"/>}
                    <Divider variant="middle"/>
                    <div className="likes_comments">
                        <Comments data={post.comments}/> 
                        <p  className="likes"> Likes: {post.noOfLikes} </p>
                    </div>
                </div>
            </div>
        );
    }

    postData(body){
        this.setState({
            posts:body
        });

    }

    componentDidMount() {
        fetch(`${API_URL}/posts`)
        .then((data) =>  data.json())
        .then(this.postData)
    }
    render() {
        return (
            <div>
                <PostsNavBar/>
                { this.state.posts.map(this.postView) }
            </div>
        );
           
    }
}

export default Feed;