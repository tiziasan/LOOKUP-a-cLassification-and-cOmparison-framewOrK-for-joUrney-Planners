import {Component, OnInit} from '@angular/core';


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
  {micro :'Multi Platform', planner1:	3, planner2: 3, planner3:	3, planner4:	3	, planner5:3	, planner6:0.5	, planner7:3, planner8:	2	, planner9:1.5, planner10:	1},
  {micro :'Android OS', planner1: 1	, planner2:1	, planner3:1, planner4:	1	, planner5:1	, planner6:0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0},
  {micro :'IOS', planner1:	1	, planner2:1	, planner3:1, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0},
  {micro :'Windows Desktop Application', planner1:	0, planner2:	0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Mac OS Application', planner1:	0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Web Application', planner1:	1	, planner2:1, planner3:	1, planner4:	1, planner5:	1, planner6:	0.5, planner7:	1, planner8:	0, planner9:	0.5, planner10:1},
  {micro :'Transportation Mode', planner1:	7, planner2:	1.5, planner3:	7, planner4:	2, planner5:	5, planner6:	5, planner7:	5, planner8:	2.5, planner9:	1.5, planner10:	0},
  {micro :'Personal motorcycle', planner1:	1, planner2:	0, planner3:	1, planner4:	1, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Personal car', planner1:	1, planner2:	0	, planner3:1, planner4:	1, planner5:	1, planner6:	1, planner7:	0, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Boat', planner1:	1, planner2:	0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:1	, planner8:0.5, planner9:	0, planner10:	0},
  {micro :'Airplane', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0.5, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Bus', planner1:	1	, planner2:0.5, planner3:	1, planner4:	0, planner5:	0.5, planner6:	1, planner7:	1, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'TrainSubwayTram', planner1:	1	, planner2:0.5, planner3:	1, planner4:	0, planner5:	0.5, planner6:	1, planner7:	1, planner8:	0.5, planner9:	0, planner10:	0},
  {micro :'Taxi', planner1:	1, planner2:	0.5	, planner3:1	, planner4:0	, planner5:0.5	, planner6:1, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Autonomous driving transportation', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Uber', planner1:	1	, planner2:0	, planner3:1, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Car rental', planner1:	0	, planner2:0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Green Transportation Mode', planner1:	5	, planner2:3, planner3:	6, planner4:	3, planner5:	2, planner6:	4, planner7:	2, planner8:	2.5, planner9:	1, planner10:	2},
  {micro :'Walking', planner1:	1, planner2:	1	, planner3:1	, planner4:0	, planner5:1	, planner6:1	, planner7:0.5	, planner8:1	, planner9:0.5	, planner10:1},
  {micro :'Bike	', planner1:1	, planner2:1	, planner3:1	, planner4:0	, planner5:1	, planner6:1	, planner7:0.5, planner8:	0.5, planner9:	0.5, planner10:	1},
  {micro :'Electric bike', planner1:	1, planner2:	0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0.5	, planner9:0	, planner10:0},
  {micro :'Electric motorbike', planner1:	0	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Electric car', planner1:	0	, planner2:0, planner3:	0, planner4:	1, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Electric car rental', planner1:	0	, planner2:0, planner3:	0.5, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Electric scooter	', planner1:1	, planner2:1, planner3:	0.5, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0},
  {micro :'Wheelchair', planner1:	0	, planner2:0, planner3:	1, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Park and ride', planner1:	0	, planner2:0	, planner3:0, planner4:	0, planner5:	0, planner6:	1, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Carpooling	', planner1:1	, planner2:0	, planner3:1, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Eco Features', planner1:	0	, planner2:0, planner3:	1, planner4:	0, planner5:	0, planner6:	2, planner7:	0, planner8:	0, planner9:	0, planner10:	4},
  {micro :'Eco-friendly way highlighted', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Eco Education', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:1	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'CO2 Compensation	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Eco constraints', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Counter of pollution CO2	', planner1:0, planner2:	0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1},
  {micro :'Quietness way solution', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1},
  {micro :'Fresh air solution	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Backend Features', planner1:4	, planner2:3.5	, planner3:3.5	, planner4:2.5, planner5:	2.5, planner6:	1	, planner7:3, planner8:	3.5, planner9:	2, planner10:	3.5},
  {micro :'Based on public maps', planner1:	0	, planner2:0	, planner3:0.5, planner4:	0, planner5:	0, planner6:	1, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Based on private maps', planner1:	1, planner2:	1	, planner3:0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Opensource	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Public API	', planner1:1	, planner2:0.5	, planner3:0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	0.5, planner10:	0.5},
  {micro :'MaaS development', planner1:	1, planner2:	1, planner3:	1, planner4:	0, planner5:	0, planner6:	0, planner7:	0.5, planner8:	1, planner9:	0.5, planner10:	0},
  {micro :'User friendly interface', planner1:	1	, planner2:1	, planner3:1	, planner4:0.5	, planner5:0.5, planner6:	0	, planner7:0.5, planner8:	0.5, planner9:	0, planner10:	1},
  {micro :'Self adaptive plans features', planner1:	3.5, planner2:	0, planner3:	1, planner4:	3, planner5:	2.5, planner6:	0, planner7:	0, planner8:	2, planner9:	1, planner10:	3},
  {micro :'Live update on traffic	', planner1:1	, planner2:0, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Live update on closed street', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0},
  {micro :'Gas station live update', planner1:	0.5	, planner2:0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0},
  {micro :'Parking lots live update', planner1:	1	, planner2:0	, planner3:0	, planner4:0	, planner5:0.5, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Air quality live update', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Greenery level updates	', planner1:0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Noise level live updates	', planner1:0, planner2:	0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1},
  {micro :'Health features', planner1:1, planner2:	0	, planner3:2	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Health app integration', planner1:	0	, planner2:0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Healthiest plan is highlighted	', planner1:0, planner2:	0, planner3:	1, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Calories counter', planner1:	1	, planner2:0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Monitoring features', planner1:	5.5, planner2:	0.5, planner3:	2.5, planner4:	7, planner5:	4.5, planner6:	0, planner7:	0.5, planner8:	4	, planner9:1.5, planner10:	0},
  {micro :'Traffic notification during trip', planner1:	1	, planner2:0	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:0.5, planner10:	0},
  {micro :'Hot spot notification during trip', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0.5, planner6:	0, planner7:	0, planner8:	1, planner9:	0, planner10:	0},
  {micro :'Real time traffic information	', planner1:1	, planner2:0	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:0	, planner10:0},
  {micro :'Hot spot crowdedness	', planner1:0.5, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Speed camera notification	', planner1:1	, planner2:0	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0},
  {micro :'Hot spots report by users', planner1:	0.5	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Accidents report by users', planner1:	0.5	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Police report by users	', planner1:0, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Transport agencies real time notices	', planner1:0	, planner2:0.5, planner3:	0.5, planner4:	0, planner5:	0, planner6:	0, planner7:	0.5, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Input features', planner1:4, planner2:	4, planner3:	3, planner4:	3, planner5:	4.5, planner6:	1, planner7:	1, planner8:	3, planner9:	2.5	, planner10:0},
  {micro :'Calendar integration	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Motivation pattern', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:1, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Time constraint	', planner1:1	, planner2:1	, planner3:0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Length constraint	', planner1:1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0},
  {micro :'Cost constraint', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Minimal transfer time for public transport', planner1:	1	, planner2:1	, planner3:0.5, planner4:	0	, planner5:1	, planner6:0	, planner7:0	, planner8:0.5, planner9:	0, planner10:	0},
  {micro :'Wheelchair info', planner1:	0, planner2:	0, planner3:	1, planner4:	0, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Carbon emission constraints', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Travel features', planner1:	9, planner2:	4, planner3:	1, planner4:	8, planner5:	6, planner6:	0.5, planner7:	1.5, planner8:	6, planner9:	5, planner10:	1},
  {micro :'Multimodal transportation	', planner1:1, planner2:	1, planner3:	1, planner4:	0, planner5:	0.5, planner6:	0.5, planner7:	0.5, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Multi spot trip', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Trip scheduling', planner1:	1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:1	, planner8:1	, planner9:1	, planner10:0},
  {micro :'Notification about off-road streets', planner1:	1	, planner2:0	, planner3:0	, planner4:1	, planner5:0.5, planner6:	0, planner7:	0, planner8:	0.5	, planner9:0.5, planner10:	0},
  {micro :'Permit for restricted zones	', planner1:0, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'POI close to destination	', planner1:1, planner2:	1, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5	, planner10:0},
  {micro :'Sharing of expected arrival time', planner1:	1, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Sharing live location', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	1, planner9:	0.5, planner10:	0},
  {micro :'Sharing trip', planner1:	1, planner2:	1, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Avoid streets with tolls	', planner1:1	, planner2:0	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0.5	, planner9:0	, planner10:0},
  {micro :'Optional features', planner1:11	, planner2:3.5, planner3:	2, planner4:	10, planner5:	7.5, planner6:	0, planner7:	1, planner8:	5.5, planner9:	5, planner10:	1},
  {micro :'Cloud profile management	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	1, planner8:	1, planner9:	1, planner10:	0},
  {micro :'GPS speedometer', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Gamification	', planner1:1	, planner2:0	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Music app integration', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Forum', planner1:	1	, planner2:0	, planner3:0	, planner4:1	, planner5:0.5, planner6:	0	, planner7:0	, planner8:0.5, planner9:	0	, planner10:0},
  {micro :'Advertisement', planner1:	0, planner2:	1, planner3:	0, planner4:	0.5, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Reminder for lights', planner1:1, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Reminder for children', planner1:	0, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0	, planner10:0},
  {micro :'Street view', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Adding the trip to favourites	', planner1:1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0},
  {micro :'Accessibility support', planner1:	1, planner2:	0, planner3:	0, planner4:	0.5, planner5:	1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0},
  {micro :'Counter of lines in the roads	', planner1:1	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Path sorting	', planner1:1	, planner2:0.5, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Ranking of routes', planner1:	1	, planner2:0	, planner3:1	, planner4:0	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1},
  {micro :'Public transportation', planner1:3	, planner2:2	, planner3:0.5, planner4:	0, planner5:	1.5, planner6:	0.5, planner7:	7, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Ticket buying integration	', planner1:0.5	, planner2:0	, planner3:0	, planner4:0	, planner5:0.5, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Seasonal ticket buying integration', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	0, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Gift a ticket', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:1	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Remote ticket management', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:1	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Tickets info', planner1:	0.5, planner2:	0, planner3:	0, planner4:	0, planner5:	0.5, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'List of buses lines	', planner1:1, planner2:	1, planner3:	0, planner4:	0, planner5:	0.5, planner6:	0.5, planner7:	0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Public transport timetables	', planner1:1, planner2:	1, planner3:	0.5, planner4:	0, planner5:	0, planner6:	0, planner7:	1, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Ticket pooling', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:0	, planner6:0	, planner7:1	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Setting features', planner1:	4, planner2:	4, planner3:	4, planner4:	6, planner5:	6.5, planner6:	2, planner7:	2, planner8:	3, planner9:	3, planner10:	3},
  {micro :'Multi languages', planner1:	1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:1	, planner8:1	, planner9:1	, planner10:1},
  {micro :'Night mode', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'2d streets mode', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:1	, planner8:1	, planner9:1	, planner10:1},
  {micro :'3d streets mode', planner1:	0, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Satellite mode', planner1:	0, planner2:	0, planner3:	1, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Multiple voices	', planner1:0	, planner2:0	, planner3:0	, planner4:1	, planner5:0.5, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Set homework location	', planner1:1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:0	, planner8:1	, planner9:1	, planner10:0},
  {micro :'Hot spots	', planner1:6	, planner2:4	, planner3:1.5, planner4:	8, planner5:	13, planner6:	0, planner7:	0, planner8:	3.5	, planner9:3.5, planner10:	5},
  {micro :'Restaurant info	', planner1:1	, planner2:1, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Attraction info', planner1:	1, planner2:	1, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	1, planner9:	1, planner10:	0},
  {micro :'Monuments info	', planner1:1	, planner2:1	, planner3:0	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:1	, planner9:1	, planner10:0},
  {micro :'business activities info	', planner1:1, planner2:	1, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'Restaurants review	', planner1:0, planner2:	0, planner3:	0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Attraction reviews', planner1:	0	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Monuments reviews	', planner1:0	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Business activities reviews', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Custom points	', planner1:0, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'Event integration	', planner1:1	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'News info	', planner1:0	, planner2:0	, planner3:0	, planner4:0	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:0},
  {micro :'Adding new address', planner1:	0	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1},
  {micro :'Adding new business	', planner1:0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Adding new roads	', planner1:0	, planner2:0	, planner3:0	, planner4:1	, planner5:0	, planner6:0	, planner7:0	, planner8:0	, planner9:0	, planner10:1},
  {micro :'Report about speed limit', planner1:	1, planner2:	0, planner3:	0, planner4:	1, planner5:	0, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Adding comments', planner1:	0, planner2:	0, planner3:	0, planner4:	0, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	1},
  {micro :'Coverage', planner1:	5.5	, planner2:6.5, planner3:	6.5, planner4:	7	, planner5:7	, planner6:3	, planner7:4, planner8:	4.5, planner9:	5.5, planner10:	4},
  {micro :'Worldwide', planner1:	0.5, planner2:	0.5, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0.5, planner10:	0},
  {micro :'More than 1 continent', planner1:	0, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
  {micro :'1 continent	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	1, planner7:	1, planner8:	1, planner9:	1, planner10:	1},
  {micro :'More than 1 country', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:0	, planner8:0	, planner9:1	, planner10:0},
  {micro :'1 country', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:1	, planner8:1	, planner9:1	, planner10:1},
  {micro :'More than 1 city', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:0	, planner7:1	, planner8:1	, planner9:1	, planner10:1},
  {micro :'1 city	', planner1:1, planner2:	1, planner3:	1, planner4:	1, planner5:	1, planner6:	1, planner7:	1, planner8:	1, planner9:	1, planner10:	1},
  {micro :'Trip coverage', planner1:	1	, planner2:2	, planner3:1.5, planner4:	4.5, planner5:	4.5, planner6:	1	, planner7:2	, planner8:3.5, planner9:	2, planner10:	2},
  {micro :'Within the city', planner1:	1	, planner2:1	, planner3:1	, planner4:1	, planner5:1	, planner6:1	, planner7:1	, planner8:1	, planner9:1	, planner10:1},
  {micro :'Regional	', planner1:0, planner2:	0.5, planner3:	0.5, planner4:	1, planner5:	1, planner6:	0, planner7:	0.5, planner8:	1, planner9:	0.5, planner10:	1},
  {micro :'Intercity', planner1:	0, planner2:	0.5, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0.5, planner8:	1, planner9:	0.5, planner10:	0},
  {micro :'International', planner1:	0, planner2:	0, planner3:	0, planner4:	1, planner5:	1, planner6:	0, planner7:	0, planner8:	0.5, planner9:	0, planner10:	0},
  {micro :'Intercontinental', planner1:	0	, planner2:0	, planner3:0	, planner4:0.5, planner5:	0.5, planner6:	0, planner7:	0, planner8:	0, planner9:	0, planner10:	0},
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
    for (let i = 0; i<148; i++){
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
    {value: [0,5], viewValue: 'Multi Platform'},
    {value: [6,16], viewValue: 'Transportation Mode'},
    {value: [17,27], viewValue: 'Green Transportation Mode'},
    {value: [28,35], viewValue: 'Eco Features'},
    {value: [36,42], viewValue: 'Backend Features'},
    {value: [43,50], viewValue: 'Self adaptive plans features'},
    {value: [51,54], viewValue: 'Health features'},
    {value: [55,64], viewValue: 'Monitoring features'},
    {value: [65,73], viewValue: 'Input features'},
    {value: [74,84], viewValue: 'Travel features'},
    {value: [85,99], viewValue: 'Optional features'},
    {value: [100,108], viewValue: 'Public transportation'},
    {value: [109,116], viewValue: 'Setting features'},
    {value: [117,133], viewValue: 'Hot Spots'},
    {value: [134,141], viewValue: 'Coverage'},
    {value: [142,147], viewValue: 'Trip coverage'}

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


    //console.log(this.saleData);

    //console.log(this.scores1[0]['planner2'] / 2, this.scores2[0]['planner2'] / 2);

    // scores2 = [
    //   {planner1:0,planner2:0,planner3:0,planner4:0,planner5:0,planner6:0,planner7:0,planner8:0,planner9:0,planner10:0}
    // ] as ScoresElement[];



    const time = setTimeout(() => {this.show = true; clearTimeout(time)}, 100);




  }

}



//{micro :'Total Score', planner1:	72.5, planner2:	41.5, planner3:	44.5, planner4:	67	, planner5:70, planner6:	20.5, planner7:	32.5, planner8:	46.5, planner9:	35 , planner10:0},
