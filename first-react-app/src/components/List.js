import React, {Component} from "react";

class SelectList extends Component {
    render(){
        return (
            <select>
                {this.props.items.map((item) => <option key={item}>{item}</option>)};
            </select>
        );
    };  
}

export default SelectList;