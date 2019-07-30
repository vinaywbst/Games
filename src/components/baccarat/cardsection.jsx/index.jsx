import React, { Component } from 'react';
import './index.css';
class CardSection extends Component {
   constructor(props){
       super(props);
       this.state={
           
       }
   }
    render() { 
        return ( 
         <div className="cardsection">
           <div className="card_wrapper">
                <div className="card_side_a">                 
                   <div className="card_block" style={{borderColor:this.props.sideAborderColor}}>
                   <div className={this.props.sideACard1 ? "card1 active" : 'card1'}>
                       <img src={this.props.sideA.card1} alt="card1"/>
                       </div>
                      <div className={this.props.sideACard2 ? "card2 active" : 'card2'}>
                      <img src={this.props.sideA.card2} alt="card2"/>
                      </div>
                      <div className={this.props.sideACard3 ? "card3 active" : 'card3'}>
                     <img src={this.props.sideA.card3} alt="card3"/>
                     </div>
                   {this.props.sideA.counter !=='' 
                   &&
                    <div className="counter">
                       <span className="label">{this.props.sideA.counter}</span>
                   </div>}
                   </div>
                </div>
                <div className="card_side_b">              
                   <div className="card_block" style={{borderColor:this.props.sideBborderColor}}>
                   <div className={this.props.sideBCard1 ? "card1 active" : 'card1'}>
                       <img src={this.props.sideB.card1} alt="card1"/>
                        </div>

                      <div className={this.props.sideBCard2 ? "card2 active" : 'card2'}>
                       <img src={this.props.sideB.card2} alt="card2"/>
                         </div>
                         <div className={this.props.sideBCard3 ? "card3 active" : 'card3'}>
                       <img src={this.props.sideB.card3} alt="card3"/>
                         </div> 
                         {this.props.sideB.counter !== ''
                          &&
                         <div className="counter">
                       <span className="label">{this.props.sideB.counter}</span>
                   </div>  }           
                   </div>
                </div>
           </div>
         </div>
         );
    }
}
 
export default CardSection;