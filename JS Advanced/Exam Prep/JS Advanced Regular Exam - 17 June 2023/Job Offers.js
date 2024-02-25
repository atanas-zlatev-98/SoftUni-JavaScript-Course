class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let candidateNames = [];

    for (let candidate of candidates) {
      let [name, education, yearsExperience] = candidate.split("-");
      education = education.trim();

      if(!candidateNames.includes(name)){
        candidateNames.push(name);
      }


      let findCanditate = this.jobCandidates.find((x) => x.name === name);
      yearsExperience = Number(yearsExperience);

      if (findCanditate) {
        if (yearsExperience > findCanditate.yearsExperience) {
          findCanditate.yearsExperience = yearsExperience;
        }
      }

      this.jobCandidates.push({ name, education, yearsExperience });
    }

    return `You successfully added candidates: ${candidateNames.join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    let [name, expirience] = chosenPerson.split("-");
    expirience = Number(expirience);

    let findCanditate = this.jobCandidates.find((x) => x.name === name);

    if (!findCanditate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (expirience > findCanditate.yearsExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${expirience} years.`
      );
    }

    findCanditate.yearsExperience = "hired";

    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    debugger
    let findCanditate = this.jobCandidates.find((x) => x.name === name);

    if (!findCanditate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (findCanditate.education == "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (findCanditate.education == "Master") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.length <= 0) {
      throw new Error("Candidate Database is empty!");
    }

    let buff = "Candidates list:\n";
    this.jobCandidates = this.jobCandidates.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    for (let candidate of this.jobCandidates) {
      buff += `${candidate.name}-${candidate.yearsExperience}\n`;
    }

    return buff.trim();
  }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10","John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("John Jones-8"));
