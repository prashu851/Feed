import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'

class PostsNavBar extends React.Component{
    render(){
        return(
            <div>
            <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit">
                    Blogs
                </Typography>
            </Toolbar>
            </AppBar>
            </div>
        )
    }
}
export default PostsNavBar;