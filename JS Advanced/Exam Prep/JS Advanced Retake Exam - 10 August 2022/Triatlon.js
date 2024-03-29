class Triathlon{
    constructor(competitionName){
        this.competitionName =competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender){

        if(participantName in this.participants){
            return `${participantName} has already been added to the list`
        }

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`
    }

    completeness(participantName, condition){

        let disciplinesCount = 0;
        let participantCondition = Number(condition);

        if(!participantName in this.participants){
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if(participantCondition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }

        while(participantCondition >= 30){
            disciplinesCount += 1;
            participantCondition -= 30;
        }

        if(disciplinesCount <= 2){
            return `${participantName} could only complete ${disciplinesCount} of the disciplines`
        }
        let currentParticipantGenger = this.participants[participantName];
        this.listOfFinalists.push({participantName,currentParticipantGenger});
        return `Congratulations, ${participantName} finished the whole competition`

    }

    rewarding(participantName){

        let currentParticipant = this.listOfFinalists.find(x=>x.participantName === participantName);
        
        if(!currentParticipant){
           return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`

    }

    showRecord(criteria){

        if(this.listOfFinalists.length === 0){
            return `There are no finalists in this competition`
        }

        let winners = this.listOfFinalists.filter(x => x.gender === criteria);

        if(!winners){
            `There are no ${criteria}'s that finished the competition`
        }

        if(criteria === 'all'){
            let winners = '';

            for(let winner of this.listOfFinalists){
                debugger
                winners += `${winner.participantName}\n`;
            }
            return `List of all ${this.competitionName} finalists:\n${winners.trim()}`
        }

        return `${this.listOfFinalists[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
