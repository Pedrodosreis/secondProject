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




// Funcition to render the ticket information
function Button(flag1, flag2, place1, place2) {
  return (
    
  	<div class="center margin-bottom-20">
		<div class="left border-bottom-1px border-top-1px border-left-1px">
			<img class="backimage" src={backImage} alt="mountain"/>
			<img class="frontimage" src={frontImage} alt="Aircraft cl605" />
		</div> 

		<div class="right border-bottom-1px border-top-1px border-right-light-grey">
			<div class="grey-header center-align">				
					<div class="center-align"><i class="material-icons ">insert_invitation</i> August 06, 2016</div> 
					<div class="center-align"><i class="material-icons ">access_time</i> 03:00</div> 	
					<div class="center-align"><i class="material-icons ">group</i> Passenger:1</div>				
			</div>

			<div class="flag-section">
				<div class="flex-row">
					<div class="text-size-10 grey-color"><b>{place1} </b></div>
					<div class="text-size-10 grey-color"> <b>{place2}</b></div>
				</div>
				<div class="flex-row">
					<img class="flag " src={flag1} />
					<div class="grey-color text-size-25 "> LECO </div>

					<img class="perc-10 rotate-90 middle-image all-left margin-left-20 margin-right-20" src={airplaneIcon} />
					<div class="grey-color all-left text-size-25"> EKYT </div>
					<img class="flag margin-left-20" src={flag2} />
				</div>
				<div class="space-around">
					<div class="text-size-10 grey-color margin-left-30">20.6C </div>
					<div class="text-size-10 grey-color margin-right-30">19.5C</div>
				</div>
			</div>
			
			<hr class="margin-left-30 margin-right-30 margin-top-10 margin-bottom-10" />
			<div>
				<div class="all-left margin-left-30 grey-color text-size-15"><b>ETD: 09:20 loc </b></div>
				<div class="margin-left-300 grey-color text-size-15"> <b>ETA: 12:20 loc </b></div>
			</div>
		</div>
		<div class="price-tab border-top-1px border-bottom-1px border-right-1px">
			<div class="grey-header center-column">
				<img class="perc-50" src={vistaLogoGrey} />
				<div class="text-size-30 color-red"><b> BRL 200,000 </b></div>
			</div>
		</div>
	</div>

  );
}

function sideMenu() {
	return (
		<div class="menu-flex">
			<i class="material-icons margin-left-10">home</i>
			<p class="white-color margin-left-30"> My Quotes </p>
		</div>
	);
}

function upperHeader() {
	return(
		<div class="center">
			<img class="perc-10" src={vistaJetIcon} />
		</div>
	);
	
}

function mainHeader() {
	return(
		<div class="center">
			<h2 class="grey-color">Quotes</h2>
		</div>
	);
	
}

function backgroundImageWay() {
	return(
		<div class="background-image" style= {{backgroundImage: `url(${backImage})`}}>
			<h1>OLA MUNDO</h1>
		</div>
	);
	
}

// Component to call the page element
class MyComponentClass extends React.Component {
  render() {
    return <div class="flex-container">
    	{upperHeader()}
    	{sideMenu()}
    	{mainHeader()}
    	{Button(esFlag, dkFlag, "A CORUNA", "A AALBORG")}
    	{Button(frFlag, euaFlag, "PARIS", "NEW YORK")}
    	{Button(ukFlag, gerFlag, "UK CITY", "GERMANY CITY")}
    	{Button(brFlag, pqFlag, "SÃO PAULO", "PAQUISTAN CITY")}
    </div>
  }
}

// Render to HTML
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('root')
);