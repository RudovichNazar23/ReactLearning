import React, {Component} from "react";

class Link extends Component {
    render(){
        return (
            <a href={this.props.link}>{this.props.text}</a>
        );
    };
}

export default Link;
