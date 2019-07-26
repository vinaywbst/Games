import React, { Component } from 'react';
import club1 from '../../assets/cards/AC.svg';
import club2 from '../../assets/cards/2C.svg';
import club3 from '../../assets/cards/3C.svg';
import club4 from '../../assets/cards/4C.svg';
import club5 from '../../assets/cards/5C.svg';
import club6 from '../../assets/cards/6C.svg';
import club7 from '../../assets/cards/7C.svg';
import club8 from '../../assets/cards/8C.svg';
import club9 from '../../assets/cards/9C.svg';
import club10 from '../../assets/cards/10C.svg';
import clubJ from '../../assets/cards/JC.svg';
import clubK from '../../assets/cards/KC.svg';
import clubQ from '../../assets/cards/QC.svg';


import diamond1 from '../../assets/cards/AD.svg';
import diamond2 from '../../assets/cards/2D.svg';
import diamond3 from '../../assets/cards/3D.svg';
import diamond4 from '../../assets/cards/4D.svg';
import diamond5 from '../../assets/cards/5D.svg';
import diamond6 from '../../assets/cards/6D.svg';
import diamond7 from '../../assets/cards/7D.svg';
import diamond8 from '../../assets/cards/8D.svg';
import diamond9 from '../../assets/cards/9D.svg';
import diamond10 from '../../assets/cards/10D.svg';
import diamondJ from '../../assets/cards/JD.svg';
import diamondK from '../../assets/cards/KD.svg';
import diamondQ from '../../assets/cards/QD.svg';

import heart1 from '../../assets/cards/AH.svg';
import heart2 from '../../assets/cards/2H.svg';
import heart3 from '../../assets/cards/3H.svg';
import heart4 from '../../assets/cards/4H.svg';
import heart5 from '../../assets/cards/5H.svg';
import heart6 from '../../assets/cards/6H.svg';
import heart7 from '../../assets/cards/7H.svg';
import heart8 from '../../assets/cards/8H.svg';
import heart9 from '../../assets/cards/9H.svg';
import heart10 from '../../assets/cards/10H.svg';
import heartJ from '../../assets/cards/JH.svg';
import heartK from '../../assets/cards/KH.svg';
import heartQ from '../../assets/cards/QH.svg';

import spades1 from '../../assets/cards/AS.svg';
import spades2 from '../../assets/cards/2S.svg';
import spades3 from '../../assets/cards/3S.svg';
import spades4 from '../../assets/cards/4S.svg';
import spades5 from '../../assets/cards/5S.svg';
import spades6 from '../../assets/cards/6S.svg';
import spades7 from '../../assets/cards/7S.svg';
import spades8 from '../../assets/cards/8S.svg';
import spades9 from '../../assets/cards/9S.svg';
import spades10 from '../../assets/cards/10S.svg';
import spadesJ from '../../assets/cards/JS.svg';
import spadesK from '../../assets/cards/KS.svg';
import spadesQ from '../../assets/cards/QS.svg';
import './index.css';
class CardSection extends Component {
   constructor(props){
       super(props);
       this.state={
           sideA:{
                   counter:3,
                   card1:spades1,
                   card2:diamondQ,
                   card3:club3
               },
           sideB:{
                counter:10,
                card1:spades5,
                card2:diamondK,
                card3:club7
            }
           
       }
   }
    render() { 
        return ( 
         <div className="cardsection">
           <div className="card_wrapper">
                <div className="card_side_a">
                   <div className="counter">
                       <span className="label">{this.state.sideA.counter}</span>
                   </div>
                   <div className="card_block" style={{borderColor:'#808080'}}>
                   <div className="card3">
                     <img src={this.state.sideA.card3} alt="card3"/>
                     </div>
                      <div className="card2">
                      <img src={this.state.sideA.card2} alt="card2"/>
                      </div>
                      <div className="card1">
                       <img src={this.state.sideA.card1} alt="card1"/>
                       </div>
                     
                     
                   </div>
                </div>
                <div className="card_side_b">
                <div className="counter">
                       <span className="label">{this.state.sideB.counter}</span>
                   </div>
                   <div className="card_block" style={{borderColor:'#00f703'}}>
                   <div className="card3">
                       <img src={this.state.sideB.card3} alt="card3"/>
                         </div> 
                      <div className="card2">
                       <img src={this.state.sideB.card2} alt="card2"/>
                         </div>
                         <div className="card1">
                       <img src={this.state.sideB.card1} alt="card1"/>
                        </div>
                     
                   </div>
                </div>
           </div>
         </div>
         );
    }
}
 
export default CardSection;