import React from 'react';
import Comments from './Comments';
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
                <Avatar  style={{float:'left'}} variant="square" alt="avatar" src="" />
                <h6>{post.user}</h6>
                </div>
                <Divider/>
                <p style={{fontSize:'15px'}}> {post.content} </p>
                <Divider variant="middle"/>
                <div className="likes_comments">
                    
                    <p style={{fontSize:'15px'}} className="likes"> Likes: {post.noOfLikes} </p>
                   
                    <Comments data={post.comments}/>   
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
        fetch('http://localhost:4000/posts')
        .then((data) =>  data.json())
        .then(this.postData)
    }
    render() {
        return (
            <div>
                { this.state.posts.map(this.postView) }
            </div>
        );
           
    }
}

export default Feed;