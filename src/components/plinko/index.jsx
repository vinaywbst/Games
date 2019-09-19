import React, { Component } from 'react';
import GameEngine from './GameEngine';
import './index.css';

class Plinko extends Component {
    constructor(props) {
        super(props);
      
    }
    componentDidMount() {
      
    }

   
    render() {
        return (
            <div className="plinko">
               <GameEngine/>
            </div>
        );
    }
}

export default Plinko;