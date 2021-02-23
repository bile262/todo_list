import React, { Component} from 'react'

class Title extends Component {
    render(){
        const {title} = this.props;
        return(
            <div className="page-header">
                <h1>{title}</h1>
            </div>
        )
    }
}
export default Title