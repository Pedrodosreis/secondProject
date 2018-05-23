import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';


// Left Side Image
const backImage = require('../src/img/mountainBackground.jpg');
const frontImage = require('../src/img/glex-cutout.png');

// Flags
const esFlag = require('../src/img/es_flag.svg');
const dkFlag = require('../src/img/dk_flag.svg');
const frFlag = require('../src/img/fr_flag.png');
const euaFlag = require('../src/img/eua_flag.png');
const pqFlag = require('../src/img/pq_flag.jpg');
const brFlag = require('../src/img/br_flag.jpg');
const ukFlag = require('../src/img/uk_flag.jpg');
const gerFlag = require('../src/img/ger_flag.jpg');

// Icon
const airplaneIcon = require('../src/img/airport-icon.png');
const vistaJetIcon = require('../src/img/vistajet-logo.svg');
const vistaLogo = require('../src/img/vistaLogo.png');
const vistaLogoGrey = require('../src/img/vistaLogoGrey.png');

class AirplaneCard extends React.Component {
	render() {
	  return <div class="center margin-bottom-20">
	  <div class="left border-bottom-1px border-top-1px border-left-1px">
		  <div class="background-image" style= {{backgroundImage: `url(${backImage})`}}>
			  <img class="frontimage" src={frontImage} alt="Aircraft cl605" />
		  </div>
		  
	  </div> 

	  <div class="right border-bottom-1px border-top-1px border-right-light-grey">
		  <div class="grey-header center-align">				
				  <div class="center-align"><i class="material-icons ">insert_invitation</i> August 06, 2016</div> 
				  <div class="center-align"><i class="material-icons ">access_time</i> 03:00</div> 	
				  <div class="center-align"><i class="material-icons ">group</i> Passenger:1</div>				
		  </div>

		  <div class="flag-section margin-top-10">
			  <div class="space-around">
				  <div class="text-size-10 grey-color margin-left-20"><b>{this.props.city1} </b></div>
				  <div class="text-size-10 grey-color margin-right-20"> <b>{this.props.city2}</b></div>
			  </div>
			  <div class="flex-row">
				  <img class="flag " src={this.props.flag1} />
				  <div class="grey-color text-size-25 "> {this.props.airport1} </div>

				  <img class="perc-10 rotate-90 middle-image all-left margin-left-20 margin-right-20" src={airplaneIcon} />
				  <div class="grey-color all-left text-size-25"> {this.props.airport2} </div>
				  <img class="flag margin-left-20" src={this.props.flag2} />
			  </div>
			  <div class="space-around">
				  <div class="text-size-10 grey-color margin-left-30">{this.props.temp1} </div>
				  <div class="text-size-10 grey-color margin-right-30">{this.props.temp2}</div>
			  </div>
		  </div>
		  
		  <hr class="margin-left-30 margin-right-30 margin-top-10 margin-bottom-10" />
		  <div>
			  <div class="all-left margin-left-30 grey-color text-size-15"><b>{this.props.loc1} </b></div>
			  <div class="margin-left-300 grey-color text-size-15"> <b>{this.props.loc2} </b></div>
		  </div>
	  </div>
	  <div class="price-tab border-top-1px border-bottom-1px border-right-1px">
		  <div class="grey-header center-column">
			  <img class="perc-50" src={vistaLogoGrey} />
			  <div class="text-size-30 color-red"><b> {this.props.price} </b></div>
		  </div>
	  </div>
  </div>
	}
  }

class UpperMenu extends React.Component {
	render() {
	  return <div class="menu-flex">
	  <i class="material-icons margin-left-10">home</i>
	  <p class="white-color margin-left-30"> My Quotes </p>
  </div>
	}
}

<div class="center">
			<img class="perc-10" src={vistaJetIcon} />
		</div>

class CompanyLogo extends React.Component {
	render() {
	  return <div class="center">
	  <img class="perc-10" src={vistaJetIcon} />
  </div>
	}
}

class SubHeader extends React.Component {
	render() {
	  return <div class="center">
	  		<h2 class="grey-color">Quotes</h2>
  		</div>
	}
  }

class CardList extends React.Component {
	render() {
		let cards = [
			{ flag1: esFlag, flag2: gerFlag, city1:"A CORUNA", city2:"A AALBORG", airport1:"LECO", 
			airport2:"EKYT", temp1:"20.6 C", temp2:"30.2 C", loc1:"ETD: 09:20 loc", loc2:"ETA: 12:20 loc", price:"BRL 350,000"  },

			{ flag1: brFlag, flag2: euaFlag, city1:"SÃO PAULO", city2:"NEW YORK", airport1:"VIRA", 
			airport2:"UJTQ", temp1:"32.6 C", temp2:"12.2 C", loc1:"IKA: 11:20 loc", loc2:"ASD: 21:20 loc", price:"BRL 750,000" },

			{ flag1: pqFlag, flag2: ukFlag, city1:"PQ CITY", city2:"LONDON", airport1:"ASDQ", 
			airport2:"PQOL", temp1:"40.6 C", temp2:"2.2 C", loc1:"ASD: 02:20 loc", loc2:"ETA: 23:20 loc", price:"BRL 1,120,000" }
		];
	
		return (
			<div>
			  {cards.map(listy => {
				 return <AirplaneCard flag1={listy.flag1} flag2={listy.flag2} city1={listy.city1} city2={listy.city2} airport1={listy.airport1} 
				 airport2={listy.airport2} temp1={listy.temp1} temp2={listy.temp2} loc1={listy.loc1} loc2={listy.loc2} price={listy.price}/>
			  })}
			</div>
		 )
	}
}

// Component to call the page element
class MyComponentClass extends React.Component {
	
  render() {
	

    return <div class="flex-container">
    	<CompanyLogo />
    	<UpperMenu />
		<SubHeader  />
		<CardList />
    </div>
  }
}

// Render to HTML
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('root')
);