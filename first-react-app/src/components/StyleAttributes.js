import { Component, Fragment } from "react";

class StyledFullName extends Component {
    render(){
      return (
        <Fragment>
            <span style={{"fontSize": "30pt", "color": "#e5eaf5", "margin": "1px 2px 3px", "padding": "5px"}}>{this.props.name}</span>
            <span style={{"fontSize": "30pt", "color": "#ff1d58", "text-decoration": "underline"}}>{this.props.surname}</span>
        </Fragment>
      );  
    };
}

export default StyledFullName;
