import React, {Component} from "react";


class DateTimeNow extends Component {
    render() {
        const dateTime = new Date().toLocaleString();

        return <p> {dateTime} </p>;
    };
}

export default DateTimeNow;
