import { Component, Fragment } from "react";

class Breeds extends Component {
    render(){
        return (
            <dl className={[...this.props.className]}>
                {this.props.list.map(({breed, description}) => {
                    return (
                        <Fragment key={breed}>
                        <dt>{breed}</dt>
                        <dd>{description}</dd>
                        </Fragment>
                    );
                })}
            </dl>
        );
    };
}

export default Breeds;
