"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverangeGoalsAnalysis = void 0;
class AverangeGoalsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let numberOfMatches = 0;
        let allGoals = 0;
        matches.forEach((match) => {
            if (match[1] === this.teamName) {
                numberOfMatches++;
                allGoals += match[3];
            }
            else if (match[2] === this.teamName) {
                numberOfMatches++;
                allGoals += match[3];
            }
        });
        if (numberOfMatches === 0) {
            return `Team ${this.teamName} was not found in database.`;
        }
        const averangeGoals = allGoals / numberOfMatches;
        return `Team ${this.teamName} avaranged ${averangeGoals} goals in ${numberOfMatches} matches with ${allGoals} goals total.`;
    }
}
exports.AverangeGoalsAnalysis = AverangeGoalsAnalysis;
