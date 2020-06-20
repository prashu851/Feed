import React from 'react';
import Button from 'react-bootstrap/Button'

class Comments extends React.Component {

    constructor() {
        super();
        this.state = {
            toggle: false
        }
        this.changeToggle = this.changeToggle.bind(this);
    }

    renderComment(comment) {
        return <p className="post_comment"> {comment} </p>
    }

    changeToggle() {
        const newToggle = !this.state.toggle;
        this.setState({
            toggle: newToggle
        });
    }
    render() {
        return (
            <div>
                <Button variant="outline-primary" onClick={this.changeToggle}>Comments</Button>
                {this.state.toggle ? this.props.data.map(this.renderComment) : ""}
            </div>
        )
    }
}

export default Comments;