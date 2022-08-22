import {Component, OnInit} from '@angular/core';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


export interface PlannersElement {
  micro: string;
  planner1: number;
  planner2: number;
  planner3: number;
  planner4: number;
  planner5: number;
  planner6: number;
  planner7: number;
  planner8: number;
  planner9: number;
  planner10: number;
  desc: string;

}
interface SelectMacro {
  value: number[];

  viewValue: string;
}
interface SelectScore {
  value: number;
  viewValue: string;
}


export interface ScoresElement {
  planner1: number;
  planner2: number;
  planner3: number;
  planner4: number;
  planner5: number;
  planner6: number;
  planner7: number;
  planner8: number;
  planner9: number;
  planner10: number;

}



const ELEMENT_DATA: PlannersElement[] = [
  {micro :'Front End Platform', planner1:	4, planner2: 4, planner3:	4, planner4:	3.5	, planner5:3.5	, planner6:0.5	, planner7:3.5, planner8:	2.5	, planner9:1.5, planner10:2, desc:'Front End Platform'},
  {micro :'Android OS', planner1: 1	, planner2:1	, planner3:1, planner4:	1	, planner5:1	, planner6:0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0, desc:'The planner supports Android OS'},
  {micro :'IOS', planner1:	1	, planner2:1	, planner3:1, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0, desc:'The planner supports IOS'},
  {micro :'Windows Desktop Application', planner1:	0, planner2:	0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner supports Windows Desktop Application'},
  {micro :'Mac OS Application', planner1:	0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports Mac OS Application'},
  {micro :'Web Application', planner1:	1	, planner2:1, planner3:	1, planner4:	1, planner5:	1, planner6:	0.5, planner7:	1, planner8:	0, planner9:	0.5, planner10:1, desc:'The planner supports Web Application'},
  {micro :'User friendly interface', planner1:	1	, planner2:1	, planner3:1	, planner4:0.5	, planner5:0.5, planner6:	0	, planner7:0.5, planner8:	0.5, planner9:	0, planner10:	1, desc:'If the planner has a user friendly interface. 1 point if all the functionalities are reachable in less then 3 click, 0.5 if all the functionalities are reachable in less then 5 clicks and, 0 otherwise'},
  {micro :'Transportation Mode', planner1:	7, planner2:	1.5, planner3:	7, planner4:	2, planner5:	5, planner6:	5, planner7:	5, planner8:	2.5, planner9:	1.5, planner10:	0, desc:'Transportation Mode'},
  {micro :'Personal motorcycle', planner1:	1, planner2:	0, planner3:	1, planner4:	1, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports personal motorcycle '},
  {micro :'Personal car', planner1:	1, planner2:	0	, planner3:1, planner4:	1, planner5:	1, planner6:	1, planner7:	0, planner8:	1, planner9:	1, planner10:	0, desc:'The planner supports personal car'},
  {micro :'Boat', planner1:	1, planner2:	0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:1	, planner8:0.5, planner9:	0, planner10:	0, desc:'The planner supports boats'},
  {micro :'Airplane', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0.5, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports airplanes'},
  {micro :'Bus', planner1:	1	, planner2:0.5, planner3:	1, planner4:	0, planner5:	0.5, planner6:	1, planner7:	1, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner supports bus'},
  {micro :'TrainSubwayTram', planner1:	1	, planner2:0.5, planner3:	1, planner4:	0, planner5:	0.5, planner6:	1, planner7:	1, planner8:	0.5, planner9:	0, planner10:	0, desc:'The planner supports train/subway/tram'},
  {micro :'Taxi', planner1:	1, planner2:	0.5	, planner3:1	, planner4:0	, planner5:0.5	, planner6:1, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports tesi'},
  {micro :'Autonomous driving transportation', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports autonomous driving transportation'},
  {micro :'Uber', planner1:	1	, planner2:0	, planner3:1, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports Uber'},
  {micro :'Car rental', planner1:	0	, planner2:0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner supports car rental'},
  {micro :'Green Transportation Mode', planner1:	5	, planner2:3, planner3:	6, planner4:	3, planner5:	2, planner6:	4, planner7:	2, planner8:	2.5, planner9:	1, planner10:	2, desc:'Green Transportation Mode'},
  {micro :'Walking', planner1:	1, planner2:	1	, planner3:1	, planner4:0	, planner5:1	, planner6:1	, planner7:0.5	, planner8:1	, planner9:0.5	, planner10:1, desc:'The planner supports walking'},
  {micro :'Bike	', planner1:1	, planner2:1	, planner3:1	, planner4:0	, planner5:1	, planner6:1	, planner7:0.5, planner8:	0.5, planner9:	0.5, planner10:	1, desc:'The planner supports bike'},
  {micro :'Electric bike', planner1:	1, planner2:	0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0.5	, planner9:0	, planner10:0, desc:'The planner supports electric bike'},
  {micro :'Electric motorbike', planner1:	0	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner supports electric motorcycle '},
  {micro :'Electric car', planner1:	0	, planner2:0, planner3:	0, planner4:	1, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner support electric car'},
  {micro :'Electric car rental', planner1:	0	, planner2:0, planner3:	0.5, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports electric car rental'},
  {micro :'Electric scooter	', planner1:1	, planner2:1, planner3:	0.5, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0, desc:'The planner supports electric scooter'},
  {micro :'Wheelchair', planner1:	0	, planner2:0, planner3:	1, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports wheelchair '},
  {micro :'Park and ride', planner1:	0	, planner2:0	, planner3:0, planner4:	0, planner5:	0, planner6:	1, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports park and ride '},
  {micro :'Carpooling	', planner1:1	, planner2:0	, planner3:1, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner supports carpooling'},
  {micro :'Eco Features', planner1:	0	, planner2:0, planner3:	1, planner4:	0, planner5:	0, planner6:	2, planner7:	0, planner8:	0, planner9:	0, planner10:	4, desc:'Eco Features'},
  {micro :'Eco-friendly way highlighted', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner has eco friendly ways highlighted '},
  {micro :'Eco Education', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:1	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner provides a functionality to educate about ecology '},
  {micro :'CO2 Compensation	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner has a feature to compensate the CO2'},
  {micro :'Eco constraints', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner can set some ecological constraints '},
  {micro :'Counter of pollution CO2	', planner1:0, planner2:	0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1, desc:'The planner has a counter for the pollution'},
  {micro :'Quietness way solution', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1, desc:'The planner shows the quietest way'},
  {micro :'Fresh air solution	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner shows the freshest air way'},
  {micro :'Self adaptive plans features', planner1:	3.5, planner2:	0, planner3:	1, planner4:	3, planner5:	2.5, planner6:	0, planner7:	0, planner8:	2, planner9:	1, planner10:	3, desc:'Self adaptive plans features'},
  {micro :'Live update on traffic	', planner1:1	, planner2:0, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner provides live update on traffic'},
  {micro :'Live update on closed street', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0, desc:'The planner provides live update on closed streets'},
  {micro :'Gas station live update', planner1:	0.5	, planner2:0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0, desc:'The planner provides live updates on gas stations'},
  {micro :'Parking lots live update', planner1:	1	, planner2:0	, planner3:0	, planner4:0	, planner5:0.5, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner provides live updates on parking lots'},
  {micro :'Air quality live update', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner provides live updates on air quality'},
  {micro :'Greenery level updates	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner provides updates if finds a greener way'},
  {micro :'Noise level live updates	', planner1:0, planner2:	0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1, desc:'The planner provides live updates on noise level'},
  {micro :'Health features', planner1:1, planner2:	0	, planner3:2	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'Health features'},
  {micro :'Health app integration', planner1:	0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner has an integration with health app'},
  {micro :'Healthiest plan is highlighted	', planner1:0, planner2:	0, planner3:	1, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner highlights the healthiest path'},
  {micro :'Calories counter', planner1:	1	, planner2:0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner has a calories counter'},


  {micro :'Monitoring features', planner1:	6.5, planner2:	0.5, planner3:	2.5, planner4:	8, planner5:	4.5, planner6:	0, planner7:	0.5, planner8:	4	, planner9:1.5, planner10:	1, desc:'Monitoring features'},
  {micro :'Traffic notification during trip', planner1:	1	, planner2:0	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:0.5, planner10:	0, desc:'The planner sends traffic notification during the trip'},
  {micro :'Hot spot notification during trip', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0.5, planner6:	0, planner7:	0, planner8:	1, planner9:	0, planner10:	0, desc:'The planner sends hot spot notification during the trip'},
  {micro :'Real time traffic information	', planner1:1	, planner2:0	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:0	, planner10:0, desc:'The planner has real time traffic information'},
  {micro :'Hot spot crowdedness	', planner1:0.5, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner shows hot spots crowdedness '},
  {micro :'Speed camera notification	', planner1:1	, planner2:0	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0, desc:'The planner sends notifications about speed cameras'},
  {micro :'Hot spots report by users', planner1:	0.5	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner receives real time notices from transport agencies'},
  {micro :'Accidents report by users', planner1:	0.5	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner allows the user to report hot spots'},
  {micro :'Police report by users	', planner1:0, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner allows the user to report accidents'},
  {micro :'Transport agencies real time notices	', planner1:0	, planner2:0.5, planner3:	0.5, planner4:	0, planner5:	0, planner6:	0, planner7:	0.5, planner8:	0, planner9:	0, planner10:	0, desc:'The planner allows the user to report police'},
  {micro :'Report about speed limit', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner shows the speed limits'},


  {micro :'Input features', planner1:5, planner2:	4, planner3:	3, planner4:	4, planner5:	5.5, planner6:	1, planner7:	1, planner8:	3.5, planner9:	2.5	, planner10:0, desc:'Input features'},
  {micro :'Calendar integration	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner has an integration with the calendar'},
  {micro :'Motivation pattern', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:1, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The user can set the motivation of the trip'},
  {micro :'Time constraint	', planner1:1	, planner2:1	, planner3:0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	1, planner10:	0, desc:'The user can set time constraints '},
  {micro :'Length constraint	', planner1:1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0, desc:'The user can set length constraints '},
  {micro :'Cost constraint', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The user can set cost constraints '},
  {micro :'Minimal transfer time for public transport', planner1:	1	, planner2:1	, planner3:0.5, planner4:	0	, planner5:1	, planner6:0	, planner7:0	, planner8:0.5, planner9:	0, planner10:	0, desc:'The user can set the minimal transfer time for public transportation '},
  {micro :'Wheelchair info', planner1:	0, planner2:	0, planner3:	1, planner4:	0, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner provides wheelchair infos'},
  {micro :'Carbon emission constraints', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The user can put constraints on carbon emissions '},
  {micro :'Avoid streets with tolls	', planner1:1	, planner2:0	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0.5	, planner9:0	, planner10:0, desc:'The planner allows the user to avoid tolls'},


  {micro :'Travel features', planner1:	10, planner2:	6, planner3:	1.5, planner4:	7, planner5:	5.5, planner6:	1, planner7:	2.5, planner8:	5.5, planner9:	5, planner10:	0, desc:'Travel features'},
  {micro :'Multimodal transportation	', planner1:1, planner2:	1, planner3:	1, planner4:	0, planner5:	0.5, planner6:	0.5, planner7:	0.5, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner can mix several type of transportation mode in the same trip'},
  {micro :'Multi spot trip', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0, desc:'The planner allows the user to set  multiple stops during the trip'},
  {micro :'Trip scheduling', planner1:	1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:1	, planner8:1	, planner9:1	, planner10:0, desc:'The planner allows the user to schedule a trip'},
  {micro :'Notification about off-road streets', planner1:	1	, planner2:0	, planner3:0	, planner4:1	, planner5:0.5, planner6:	0, planner7:	0, planner8:	0.5	, planner9:0.5, planner10:	0, desc:'The planner sends notifications about off-road streets'},
  {micro :'Permit for restricted zones	', planner1:0, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner allows you to add permit for special or restricted zones '},
  {micro :'POI close to destination	', planner1:1, planner2:	1, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5	, planner10:0, desc:'The planner shows the point of interest close to the destination'},
  {micro :'Sharing of expected arrival time', planner1:	1, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner can share the expected arrival time '},
  {micro :'Sharing live location', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	1, planner9:	0.5, planner10:	0, desc:'The planner can share the current location of the user'},
  {micro :'Sharing trip', planner1:	1, planner2:	1, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0, desc:'The planner can share the trip informations'},
  {micro :'List of buses lines	', planner1:1, planner2:	1, planner3:	0, planner4:	0, planner5:	0.5, planner6:	0.5, planner7:	0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner shows the list of the buses lines'},
  {micro :'Public transport timetables	', planner1:1, planner2:	1, planner3:	0.5, planner4:	0, planner5:	0, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The planner shows the public transport timetables '},


  {micro :'Additional features', planner1:11	, planner2:3.5, planner3:	2, planner4:	10, planner5:	7.5, planner6:	0, planner7:	1, planner8:	5.5, planner9:	5, planner10:	1, desc:'Additional features'},
  {micro :'Cloud profile management	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	1, planner10:	0, desc:'The planner has a clod profile management '},
  {micro :'GPS speedometer', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner provides a GPS speedometer '},
  {micro :'Gamification	', planner1:1	, planner2:0	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner provides gamification '},
  {micro :'Music app integration', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner has integration with music apps'},
  {micro :'Forum', planner1:	1	, planner2:0	, planner3:0	, planner4:1	, planner5:0.5, planner6:	0	, planner7:0	, planner8:0.5, planner9:	0	, planner10:0, desc:'The planner has a forum'},
  {micro :'Advertisement', planner1:	0, planner2:	1, planner3:	0, planner4:	0.5, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner has advertisement '},
  {micro :'Reminder for lights', planner1:1, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0, desc:'The planner sends a reminder for the lights '},
  {micro :'Reminder for children', planner1:	0, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0	, planner10:0, desc:'The planner sends a reminder for the children in the backseats '},
  {micro :'Street view', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner has a streets view functionality '},
  {micro :'Adding the trip to favourites	', planner1:1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0, desc:'The planner has a section to add trips to favourites '},
  {micro :'Accessibility support', planner1:	1, planner2:	0, planner3:	0, planner4:	0.5, planner5:	1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0, desc:'The planner support accessibility functionalities '},
  {micro :'Counter of lines in the roads	', planner1:1	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner show the lines on the streets'},
  {micro :'Path sorting	', planner1:1	, planner2:0.5, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner can sort different trips for the same destination'},
  {micro :'Ranking of routes', planner1:	1	, planner2:0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1, desc:'The planner a system to rank the streets '},

  {micro :'Ticket transportation', planner1:1	, planner2:0	, planner3:0, planner4:	0, planner5:	1, planner6:	0, planner7:	6, planner8:	0, planner9:	0, planner10:	0, desc:'Tickets transportation'},
  {micro :'Ticket buying integration	', planner1:0.5	, planner2:0	, planner3:0	, planner4:0	, planner5:0.5, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The user can buy tickets in the planner app'},
  {micro :'Seasonal ticket buying integration', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The user can buy seasonal ticket in the planner app'},
  {micro :'Gift a ticket', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:1	, planner8:0	, planner9:0	, planner10:0, desc:'The user can buy a ticket and give it as a gift'},
  {micro :'Remote ticket management', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:1	, planner8:0	, planner9:0	, planner10:0, desc:'The user can manage the ticket remotely '},
  {micro :'Tickets info', planner1:	0.5, planner2:	0, planner3:	0, planner4:	0, planner5:	0.5, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0, desc:'The planner shows infos about the tickets'},
  {micro :'Ticket pooling', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:1	, planner8:0	, planner9:0	, planner10:0, desc:'The planner can pool the tickets '},

  {micro :'Setting features', planner1:	4, planner2:	4, planner3:	4, planner4:	6, planner5:	6.5, planner6:	2, planner7:	2, planner8:	3, planner9:	3, planner10:	3, desc:'Setting features'},
  {micro :'Multi languages', planner1:	1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:1	, planner8:1	, planner9:1	, planner10:1, desc:'The planner is multi languages '},
  {micro :'Night mode', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner has a night mode '},
  {micro :'2d streets mode', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:1	, planner8:1	, planner9:1	, planner10:1, desc:'The planner shows the street in 2d mode'},
  {micro :'3d streets mode', planner1:	0, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner shows the street in 3d mode'},
  {micro :'Satellite mode', planner1:	0, planner2:	0, planner3:	1, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner has a satellite view mode'},
  {micro :'Multiple voices	', planner1:0	, planner2:0	, planner3:0	, planner4:1	, planner5:0.5, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The user can set different voices'},
  {micro :'Set homework location	', planner1:1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:0	, planner8:1	, planner9:1	, planner10:0, desc:'The user can set favourites locations(Work, Home)'},

  {micro :'Hot spots	', planner1:5	, planner2:4	, planner3:1.5, planner4:	7, planner5:	13, planner6:	0, planner7:	0, planner8:	3.5	, planner9:3.5, planner10:	4, desc:'Hot spots'},
  {micro :'Restaurant info	', planner1:1	, planner2:1, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0, desc:'The planner shows info about restaurants'},
  {micro :'Attraction info', planner1:	1, planner2:	1, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0, desc:'The planner shows info about attractions'},
  {micro :'Monuments info	', planner1:1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0, desc:'The planner shows info about monuments'},
  {micro :'business activities info	', planner1:1, planner2:	1, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner shows info about business activities'},
  {micro :'Restaurants review	', planner1:0, planner2:	0, planner3:	0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner shows reviews about restaurants'},
  {micro :'Attraction reviews', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner shows reviews about attractions'},
  {micro :'Monuments reviews	', planner1:0	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner shows reviews about monuments'},
  {micro :'Business activities reviews', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner shows reviews about business activities'},
  {micro :'Custom points	', planner1:0, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The user can set custom points'},
  {micro :'Event integration	', planner1:1	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner has an integration with local events'},
  {micro :'News info	', planner1:0	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0, desc:'The planner shows local news '},
  {micro :'Adding new address', planner1:	0	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1, desc:'The user can add new addresses '},
  {micro :'Adding new business	', planner1:0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The user can add new business activities '},
  {micro :'Adding new roads	', planner1:0	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1, desc:'The user can add new roads'},
  {micro :'Adding comments', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The user can add comments about hot spots '},

  {micro :'Planner Coverage', planner1:	5.5	, planner2:6.5, planner3:	6.5, planner4:	7	, planner5:7	, planner6:3	, planner7:4, planner8:	4.5, planner9:	5.5, planner10:	4, desc:'Planner coverage'},
  {micro :'Worldwide', planner1:	0.5, planner2:	0.5, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0, desc:'The planner is usable worldwide '},
  {micro :'More than 1 continent', planner1:	0, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The planner is usable in more than one continent '},
  {micro :'1 continent	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	1, planner7:	1, planner8:	1, planner9:	1, planner10:	1, desc:'The planner is usable in one continent'},
  {micro :'More than 1 country', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:1	, planner10:0, desc:'The planner is usable in more than one countru'},
  {micro :'1 country', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:1	, planner8:1	, planner9:1	, planner10:1, desc:'The planner is usable in one country'},
  {micro :'More than 1 city', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:1	, planner8:1	, planner9:1	, planner10:1, desc:'The planner is usable in more than one city'},
  {micro :'1 city	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	1, planner7:	1, planner8:	1, planner9:	1, planner10:	1, desc:'The planner is usable in one city'},

  {micro :'Trip coverage', planner1:	1	, planner2:2	, planner3:1.5, planner4:	4.5, planner5:	4.5, planner6:	1	, planner7:2	, planner8:3.5, planner9:	2, planner10:	2, desc:'Trip coverage'},
  {micro :'Within the city', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:1	, planner8:1	, planner9:1	, planner10:1, desc:'The trip coverage of the planner is within the city'},
  {micro :'Regional	', planner1:0, planner2:	0.5, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0.5, planner8:	1, planner9:	0.5, planner10:	1, desc:'The trip coverage of the planner is regional '},
  {micro :'Intercity', planner1:	0, planner2:	0.5, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0.5, planner8:	1, planner9:	0.5, planner10:	0, desc:'The trip coverage of the planner is intercity'},
  {micro :'International', planner1:	0, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0, desc:'The trip coverage of the planner is international '},
  {micro :'Intercontinental', planner1:	0	, planner2:0	, planner3:0	, planner4:0.5, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0, desc:'The trip coverage of the planner is intercontinental '},

  {micro :'Practitioner Relevant Features', planner1:4	, planner2:3.5	, planner3:3.5	, planner4:3, planner5:	3, planner6:	1	, planner7:3.5, planner8:	4, planner9:	2.5, planner10:	2.5, desc:'Practitioner Relevant Features '},
  {micro :'Based on public maps', planner1:	0	, planner2:0	, planner3:0.5, planner4:	0, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner is based on public maps'},
  {micro :'Based on private maps', planner1:	1, planner2:	1	, planner3:0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	1, planner10:	0, desc:'The planner is based on private maps, 0.5 points if the map is private but you can use it '},
  {micro :'Opensource	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1, desc:'The planner project is OpenSource '},
  {micro :'Public API	', planner1:1	, planner2:0.5	, planner3:0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0.5, desc:'The planner provides some API, 0.5 points if the API provided has some limitations'},
  {micro :'MaaS development', planner1:	1, planner2:	1, planner3:	1, planner4:	0, planner5:	0, planner6:	0, planner7:	0.5, planner8:	1, planner9:	0.5, planner10:	0, desc:'The planner provides some MaaS service '},
  {micro :'Active Community', planner1:	1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0, desc:'The planner is still update and also has an active community'},

];







@Component({
  selector: 'table-component',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['Micro aspects', 'Citymappers', 'Moovit', 'TripGo', 'Waze', 'Google Maps', 'GT Planner', 'OpenMove', 'TomTom', 'Mentz','Green Paths'];
  displayedColumns1: string[] = [ 'Citymappers', 'Moovit', 'TripGo', 'Waze', 'Google Maps', 'GT Planner', 'OpenMove', 'TomTom', 'Mentz','Green Paths'];
  scores1: ScoresElement[] = [
    {planner1:0,planner2:0,planner3:0,planner4:0,planner5:0,planner6:0,planner7:0,planner8:0,planner9:0,planner10:0}
  ];

  scores2: ScoresElement[] = [
    {planner1:0,planner2:0,planner3:0,planner4:0,planner5:0,planner6:0,planner7:0,planner8:0,planner9:0,planner10:0}
  ];
  barChartcustomColors =
    [
      {name: "Citymappers", value:'#2a6ee0' },
      {name: "CitymappersW", value:'#2a6ee0' },
      {name: "Moovit", value: '#2e2b97'},
      {name: "MoovitW", value:'#2e2b97' },
      {name: "TripGo", value: '#6f3422'},
      {name: "TripGoW", value: '#6f3422'},
      {name: "Waze", value: '#fd4916'},
      {name: "WazeW", value:'#fd4916' },
      {name: "Google Maps", value:'#d2ca13' },
      {name: "Google MapsW", value:'#d2ca13' },
      {name: "GT Planner", value: '#c13b8d'},
      {name: "GT PlannerW", value: '#c13b8d'},
      {name: "OpenMove", value:'#6f733f' },
      {name: "OpenMoveW", value: '#6f733f'},
      {name: "TomTom", value: '#68c89a'},
      {name: "TomTomW", value:'#68c89a' },
      {name: "Mentz", value: '#1481d3'},
      {name: "MentzW", value: '#1481d3'},
      {name: "Green Paths", value:'#34e4f8' },
      {name: "Green PathsW", value:'#34e4f8' },
    ]

  constructor() {
    for (let i = 0; i<149; i++){
      this.scores1[0]['planner1'] += ELEMENT_DATA[i]['planner1'];
      this.scores1[0]['planner2'] += ELEMENT_DATA[i]['planner2'];
      this.scores1[0]['planner3'] += ELEMENT_DATA[i]['planner3'];
      this.scores1[0]['planner4'] += ELEMENT_DATA[i]['planner4'];
      this.scores1[0]['planner5'] += ELEMENT_DATA[i]['planner5'];
      this.scores1[0]['planner6'] += ELEMENT_DATA[i]['planner6'];
      this.scores1[0]['planner7'] += ELEMENT_DATA[i]['planner7'];
      this.scores1[0]['planner8'] += ELEMENT_DATA[i]['planner8'];
      this.scores1[0]['planner9'] += ELEMENT_DATA[i]['planner9'];
      this.scores1[0]['planner10'] += ELEMENT_DATA[i]['planner10'];

    }
    this.saleData = [
      { name: "Citymappers", value: this.scores1[0]['planner1']/2 },
      { name: "Moovit", value: this.scores1[0]['planner2']/2 },
      { name: "TripGo", value: this.scores1[0]['planner3']/2 },
      { name: "Waze", value: this.scores1[0]['planner4']/2 },
      { name: "Google Maps", value: this.scores1[0]['planner5']/2 },
      { name: "GT Planner", value: this.scores1[0]['planner6']/2 },
      { name: "OpenMove", value: this.scores1[0]['planner7']/2 },
      { name: "TomTom", value: this.scores1[0]['planner8']/2 },
      { name: "Mentz", value: this.scores1[0]['planner9']/2 },
      { name: "Green Paths", value: this.scores1[0]['planner10']/2 },
    ];

  }

  dataSource = ELEMENT_DATA;
  dataScores = this.scores1;


  selectedMacro!: number[];
  selectedScore!: number;
  selectMacro: SelectMacro[] = [
    {value: [0,6], viewValue: 'Front End Platform'},
    {value: [7,17], viewValue: 'Transportation Mode'},
    {value: [18,28], viewValue: 'Green Transportation Mode'},
    {value: [29,36], viewValue: 'Eco Features'},
    {value: [37,44], viewValue: 'Self adaptive plans features'},
    {value: [45,48], viewValue: 'Health features'},
    {value: [49,59], viewValue: 'Monitoring features'},
    {value: [60,69], viewValue: 'Input features'},
    {value: [70,81], viewValue: 'Travel features'},
    {value: [82,96], viewValue: 'Additional features'},
    {value: [97,103], viewValue: 'Ticket transportation'},
    {value: [104,111], viewValue: 'Setting features'},
    {value: [112,127], viewValue: 'Hot Spots'},
    {value: [128,135], viewValue: 'Planner Coverage'},
    {value: [136,141], viewValue: 'Trip coverage'},
    {value: [142,148], viewValue: 'Practitioner Relevant Features'},


  ];

  selectScore: SelectScore[] = [
    {value: 2, viewValue: 'x2'},
    {value: 5, viewValue: 'x5'},
    {value: 10, viewValue: 'x10'},
    {value: 20, viewValue: 'x20'}

  ];
  saleDataNew: any;
  saleData: any;

  show = false;

  generateChart(selectedMacro: number[], selectedScore: number) {
    this.show = false;
    this.scores2[0]['planner1'] = 0;
    this.scores2[0]['planner2'] = 0;
    this.scores2[0]['planner3'] = 0;
    this.scores2[0]['planner4'] = 0;
    this.scores2[0]['planner5'] = 0;
    this.scores2[0]['planner6'] = 0;
    this.scores2[0]['planner7'] = 0;
    this.scores2[0]['planner8'] = 0;
    this.scores2[0]['planner9'] = 0;
    this.scores2[0]['planner10'] = 0;

    this.selectedMacro = selectedMacro;
    this.selectedScore = selectedScore;
    for (let i = 0; i<148; i++){
      this.scores2[0]['planner1'] += ELEMENT_DATA[i]['planner1'];
      this.scores2[0]['planner2'] += ELEMENT_DATA[i]['planner2'];
      this.scores2[0]['planner3'] += ELEMENT_DATA[i]['planner3'];
      this.scores2[0]['planner4'] += ELEMENT_DATA[i]['planner4'];
      this.scores2[0]['planner5'] += ELEMENT_DATA[i]['planner5'];
      this.scores2[0]['planner6'] += ELEMENT_DATA[i]['planner6'];
      this.scores2[0]['planner7'] += ELEMENT_DATA[i]['planner7'];
      this.scores2[0]['planner8'] += ELEMENT_DATA[i]['planner8'];
      this.scores2[0]['planner9'] += ELEMENT_DATA[i]['planner9'];
      this.scores2[0]['planner10'] += ELEMENT_DATA[i]['planner10'];

    }
    for (let j =0; j < selectedScore-1; j++) {

      for (let i = selectedMacro[0]; i <= selectedMacro[1]; i++) {
        this.scores2[0]['planner1'] += ELEMENT_DATA[i]['planner1'];
        this.scores2[0]['planner2'] += ELEMENT_DATA[i]['planner2'];
        this.scores2[0]['planner3'] += ELEMENT_DATA[i]['planner3'];
        this.scores2[0]['planner4'] += ELEMENT_DATA[i]['planner4'];
        this.scores2[0]['planner5'] += ELEMENT_DATA[i]['planner5'];
        this.scores2[0]['planner6'] += ELEMENT_DATA[i]['planner6'];
        this.scores2[0]['planner7'] += ELEMENT_DATA[i]['planner7'];
        this.scores2[0]['planner8'] += ELEMENT_DATA[i]['planner8'];
        this.scores2[0]['planner9'] += ELEMENT_DATA[i]['planner9'];
        this.scores2[0]['planner10'] += ELEMENT_DATA[i]['planner10'];

      };
    };

    this.saleDataNew = [
      {name: "Citymappers", value: this.scores1[0]['planner1'] / 2},
      {name: "Citymappers", value: this.scores2[0]['planner1'] / 2},
      {name: "Moovit", value: this.scores1[0]['planner2'] / 2},
      {name: "Moovit", value: this.scores2[0]['planner2'] / 2},
      {name: "TripGo", value: this.scores1[0]['planner3'] / 2},
      {name: "TripGo", value: this.scores2[0]['planner3'] / 2},
      {name: "Waze", value: this.scores1[0]['planner4'] / 2},
      {name: "Waze", value: this.scores2[0]['planner4'] / 2},
      {name: "Google Maps", value: this.scores1[0]['planner5'] / 2},
      {name: "Google Maps", value: this.scores2[0]['planner5'] / 2},
      {name: "GT Planner", value: this.scores1[0]['planner6'] / 2},
      {name: "GT Planner", value: this.scores2[0]['planner6'] / 2},
      {name: "OpenMove", value: this.scores1[0]['planner7'] / 2},
      {name: "OpenMove", value: this.scores2[0]['planner7'] / 2},
      {name: "TomTom", value: this.scores1[0]['planner8'] / 2},
      {name: "TomTom", value: this.scores2[0]['planner8'] / 2},
      {name: "Mentz", value: this.scores1[0]['planner9'] / 2},
      {name: "Mentz", value: this.scores2[0]['planner9'] / 2},
      {name: "Green Paths", value: this.scores1[0]['planner10'] / 2},
      {name: "Green Paths", value: this.scores2[0]['planner10'] / 2},
    ];






    const time = setTimeout(() => {this.show = true; clearTimeout(time)}, 100);




  }

}



//{micro :'Total Score', planner1:	72.5, planner2:	41.5, planner3:	44.5, planner4:	67	, planner5:70, planner6:	20.5, planner7:	32.5, planner8:	46.5, planner9:	35 , planner10:0},
