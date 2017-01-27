import {
  deepFreeze,
} from "utils";

export const happyColor = "#3cd348"; // light green
export const shockColor = "#f9321d"; // almost pure red
export const defaultColor = "#dadada"; // light grey

export const maxFps = 10;

export const shockDuration = 0.9; // in seconds

export const delayToBePowered = 100; // in milliseconds

export const levels: Array<{
    timeLimit: number, // in seconds
    initialPoints: number,
    shockPenalty: number, // per press
    missedOpportunityPenalty: number, // per second
    takenOpportunityPoints: number // per second
}> = deepFreeze([

  { // level0
    timeLimit: 10,
    initialPoints: 0,
    shockPenalty: 0,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 10000000000000000,
  },
  { // level1
    timeLimit: 30,
    initialPoints: 0,
    shockPenalty: 28,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 40,
  },
  { // level2
    timeLimit: 30,
    initialPoints: 0,
    shockPenalty: 20,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 40,
  },
  { // level3
    timeLimit: 30,
    initialPoints: 0,
    shockPenalty: 20,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 40,
  },
  { // level4
    timeLimit: 30,
    initialPoints: 0,
    shockPenalty: 31,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 40,
  },
  { // level5
    timeLimit: 30,
    initialPoints: 0,
    shockPenalty: 28,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 40,
  },


  { // level6
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 10,
    missedOpportunityPenalty: 25,
    takenOpportunityPoints: 10,
  },
  { // level7
    timeLimit: 30,
    initialPoints: 0,
    shockPenalty: 50,
    missedOpportunityPenalty: -4.5,
    takenOpportunityPoints: 12,
  },
  { // level8
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 31,
    missedOpportunityPenalty: 10,
    takenOpportunityPoints: 8,
  },
  { // level9
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 8,
    takenOpportunityPoints: 15,
  },
  { // level10
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 15,
    takenOpportunityPoints: 14,
  },
  { // level11
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 10,
    takenOpportunityPoints: 15,
  },
  { // level12
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 8,
    takenOpportunityPoints: 14,
  },
  { // level13
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 20,
    missedOpportunityPenalty: 8,
    takenOpportunityPoints: 34,
  },
  { // level14
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 20,
    missedOpportunityPenalty: 8,
    takenOpportunityPoints: 18,
  },
  { // level15
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 5,
    takenOpportunityPoints: 14,
  },
  { // level16
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 8,
    takenOpportunityPoints: 12,
  },
  { // level17
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 5,
    takenOpportunityPoints: 8,
  },
  { // level18
    timeLimit: 30,
    initialPoints: 30,
    shockPenalty: 21,
    missedOpportunityPenalty: 5,
    takenOpportunityPoints: 8,
  },
  { // level19 - end screen
    timeLimit: 999999,
    initialPoints: 0,
    shockPenalty: 0,
    missedOpportunityPenalty: 0,
    takenOpportunityPoints: 0,
  },
]);
