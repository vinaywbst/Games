import React, { Component } from 'react';
import './index.css';

class SingleGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="_grid" id={this.props.id} onClick={this.props.handle_grid_click.bind(this,this.props.id)}>
                <div className="grid_wrapper">
                <img src={this.props.main_bg} alt="main_bg"/>
                <img src={this.props.small_bg} alt="small_bg"/>
                </div>
                <div className="grid_footer">
                    <h2>{this.props.name}</h2>
                    <span>{this.props.edge}% Edge</span>
                </div>
            </div>
         );
    }
}
 
export default SingleGrid;
